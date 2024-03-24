import fs from 'fs';
import path from 'path';

export const generateSixDigitCode = () => {
    const code = Math.floor(Math.random() * 900000) + 100000;
    return code.toString();
};

export const readHTMLTemplate = (templateName: string) => {
    const templatePath = path.join(__dirname, templateName);
    return fs.readFileSync(templatePath, 'utf-8');
};
