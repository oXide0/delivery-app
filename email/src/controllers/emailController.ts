import { Request, Response } from 'express';
import { SendMailOptions, SentMessageInfo } from 'nodemailer';
import { transporter } from '../configs/config';
import { environment } from '../environment';
import { EmailVerificationCodeModel } from '../models/EmailVerificationCode';
import { generateSixDigitCode, readHTMLTemplate } from '../utils/utils';

export const sendEmail = async (req: Request, res: Response) => {
    const code = generateSixDigitCode();
    const htmlTemplate = readHTMLTemplate('../utils/template.html');
    const modifiedHTML = htmlTemplate
        .replace('{{ ACCESS_CODE }}', code)
        .replace('{{ USER_NAME }}', req.body.name);

    const mailOptions: SendMailOptions = {
        from: environment.email,
        to: req.body.email,
        subject: 'Access Code',
        html: modifiedHTML,
    };

    await EmailVerificationCodeModel.create({
        code,
        email: req.body.email,
        expiresAt: new Date(Date.now() + 600000), // 10 minutes
    });

    transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });

    res.status(200).json({ message: 'Access code sent' });
};
export const verifyCode = async (req: Request, res: Response) => {
    const { email, code } = req.body;
    const emailVerificationCode = await EmailVerificationCodeModel.findOne({ email, code });

    if (!emailVerificationCode) {
        return res.status(400).json({ message: 'Invalid code' });
    }

    if (emailVerificationCode.expiresAt < new Date()) {
        return res.status(400).json({ message: 'Code expired' });
    }

    await EmailVerificationCodeModel.deleteOne({ email, code });

    res.status(200).json({ message: 'Code verified' });
};
