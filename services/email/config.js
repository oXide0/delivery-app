const nodeMailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

const sendAccessCodeEmail = (to, accessCode) => {
    const htmlTemplate = readHTMLTemplate('template.html');
    const modifiedHTML = htmlTemplate.replace('{{ ACCESS_CODE }}', accessCode);

    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject: 'Access Code Email',
        html: modifiedHTML,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

const readHTMLTemplate = (templateName) => {
    const templatePath = path.join(__dirname, templateName);
    return fs.readFileSync(templatePath, 'utf-8');
};

module.exports = { sendAccessCodeEmail };
