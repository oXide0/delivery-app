import { Schema, model } from 'mongoose';

const EmailVerificationCodeSchema = new Schema({
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

export const EmailVerificationCodeModel = model(
    'EmailVerificationCode',
    EmailVerificationCodeSchema
);
