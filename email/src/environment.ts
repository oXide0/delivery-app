import { config } from 'dotenv';
config();

export const environment = {
    serverPort: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    clientURL: process.env.CLIENT_URL,
    email: process.env.EMAIL,
    emailPassword: process.env.EMAIL_PASSWORD,
};
