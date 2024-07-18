import { Schema, model, Document } from 'mongoose';

export interface EmailVerificationCode extends Document {
    code: string;
    email: string;
    expiresAt: Date;
}

export const EmailVerificationCodeSchema = new Schema<EmailVerificationCode>({
    code: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
});

export const EmailVerificationCodeModel = model<EmailVerificationCode>(
    'EmailVerificationCode',
    EmailVerificationCodeSchema
);
