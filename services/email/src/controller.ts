import { Request, Response } from 'express';
import { generateSixDigitCode, readHTMLTemplate, transporter } from './utils';
import { SendMailOptions, SentMessageInfo } from 'nodemailer';

export const handleAccessCode = async (req: Request, res: Response) => {
    const accessCode = generateSixDigitCode();
    const htmlTemplate = readHTMLTemplate('template.html');
    const modifiedHTML = htmlTemplate
        .replace('{{ ACCESS_CODE }}', accessCode)
        .replace('{{ USER_NAME }}', req.body.name);

    const mailOptions: SendMailOptions = {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: 'Access Code Email',
        html: modifiedHTML,
    };

    transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
    res.status(200).json({ message: 'Access code sent', accessCode });
};
