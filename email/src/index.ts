import express from 'express';
import { configureServer, startServer } from './configs/config';
import router from './routes/routes';

const app = express();

configureServer(app);
app.use('/api', router);

startServer(app);
