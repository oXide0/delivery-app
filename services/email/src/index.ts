import cors, { CorsOptions } from 'cors';
import { config } from 'dotenv';
import express from 'express';
config();

import { handleAccessCode } from './controller';

const app = express();
const port = process.env.PORT;

const corsOptions: CorsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

app.post('/access-code', handleAccessCode);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
