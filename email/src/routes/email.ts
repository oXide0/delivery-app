import { Router } from 'express';
import { sendEmail, verifyCode } from '../controllers/emailController';

const router = Router();

router.post('/send-code', sendEmail);
router.post('/verify-code', verifyCode);

export default router;
