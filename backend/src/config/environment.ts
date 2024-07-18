import { config } from 'dotenv';
config();

export const environment = {
    jwtSecret: process.env.JWT_SECRET!,
    port: parseInt(process.env.PORT!, 10),
    dbHost: process.env.DB_HOST!,
    dbUser: process.env.DB_USER!,
    dbName: process.env.DB_NAME!,
    dbPass: process.env.DB_PASS!,
    dbPort: parseInt(process.env.DB_PORT!, 10),
    clientUrl: process.env.CLIENT_URL!,
    mongoUri: process.env.MONGO_URI!,
    email: process.env.EMAIL!,
    emailPassword: process.env.EMAIL_PASSWORD!,
};
