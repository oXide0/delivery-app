import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailVerificationCodeSchema } from './email-verification-code.model';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'EmailVerificationCode', schema: EmailVerificationCodeSchema },
        ]),
    ],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule {}
