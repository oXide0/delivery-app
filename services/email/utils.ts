import { createTransport } from 'nodemailer';
import path from 'path';
import fs from 'fs';

export const generateSixDigitCode = () => {
    const code = Math.floor(Math.random() * 900000) + 100000;
    return code.toString();
};

export const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export const readHTMLTemplate = (templateName) => {
    const templatePath = path.join(__dirname, templateName);
    return fs.readFileSync(templatePath, 'utf-8');
};
