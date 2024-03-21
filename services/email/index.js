const dorenv = require('dotenv');
const express = require('express');
const cors = require('cors');
dorenv.config();
const { sendAccessCodeEmail } = require('./config');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.post('/access-code', (req, res) => {
    const code = generateSixDigitCode();
    sendAccessCodeEmail(req.body.email, code);
    res.status(200).json({ message: 'Access code sent', code });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

const generateSixDigitCode = () => {
    const code = Math.floor(Math.random() * 900000) + 100000;
    return code.toString();
};
