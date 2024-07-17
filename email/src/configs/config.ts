import cors, { CorsOptions } from 'cors';
import { Application, json } from 'express';
import { connect } from 'mongoose';
import { createTransport } from 'nodemailer';
import { environment } from '../environment';

const corsOptions: CorsOptions = {
    origin: environment.clientURL,
    credentials: true,
    optionsSuccessStatus: 200,
};

export const configureServer = (app: Application) => {
    app.use(cors(corsOptions));
    app.use(json());
};

export const startServer = async (app: Application) => {
    try {
        await connect(environment.mongoURI as string);
        console.log('Connected to database!');
        app.listen(environment.serverPort, () => {
            console.log(`Server is running on http://localhost:${environment.serverPort}`);
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

export const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: environment.email,
        pass: environment.emailPassword,
    },
});
