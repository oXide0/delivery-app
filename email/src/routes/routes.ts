import { Router } from 'express';
import emailRouter from './email';
const router = Router();

router.use('/email', emailRouter);

export default router;
