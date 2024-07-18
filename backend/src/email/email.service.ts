import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createTransport, SendMailOptions, SentMessageInfo } from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { SendCodeDto } from './dto/send-code.dto';
import { VerifyCodeDto } from './dto/verify-code.dto';
import { EmailVerificationCode } from './email-verification-code.model';

@Injectable()
export class EmailService {
    constructor(
        @InjectModel('EmailVerificationCode')
        private emailVerificationCodeModel: Model<EmailVerificationCode>
    ) {}

    async sendCode(sendCodeDto: SendCodeDto): Promise<{ message: string }> {
        const code = this.generateSixDigitCode();
        const htmlTemplate = this.readHTMLTemplate('./template/template.html');
        const modifiedHTML = htmlTemplate
            .replace('{{ ACCESS_CODE }}', code)
            .replace('{{ USER_NAME }}', sendCodeDto.username);

        const mailOptions: SendMailOptions = {
            from: process.env.EMAIL,
            to: sendCodeDto.email,
            subject: 'Access Code',
            html: modifiedHTML,
        };

        await this.emailVerificationCodeModel.create({
            code,
            email: sendCodeDto.email,
            expiresAt: new Date(Date.now() + 600000), // 10 minutes
        });

        const transporter = createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.emailPassword,
            },
        });

        transporter.sendMail(mailOptions, (error: Error | null, info: SentMessageInfo) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        return { message: 'Access code sent' };
    }

    async verifyCode(verifyCodeDto: VerifyCodeDto): Promise<{ message: string }> {
        const { email, code } = verifyCodeDto;
        const emailVerificationCode = await this.emailVerificationCodeModel.findOne({
            email,
            code,
        });

        if (!emailVerificationCode) {
            throw new Error('Invalid code');
        }

        if (emailVerificationCode.expiresAt < new Date()) {
            throw new Error('Code expired');
        }

        await this.emailVerificationCodeModel.deleteOne({ email, code });

        return { message: 'Code verified' };
    }

    private generateSixDigitCode(): string {
        const code = Math.floor(Math.random() * 900000) + 100000;
        return code.toString();
    }

    private readHTMLTemplate(templateName: string): string {
        const templatePath = path.join(__dirname, templateName);
        return fs.readFileSync(templatePath, 'utf-8');
    }
}
