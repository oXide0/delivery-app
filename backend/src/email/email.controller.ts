import { Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { SendCodeDto } from './dto/send-code.dto';
import { VerifyCodeDto } from './dto/verify-code.dto';

@Controller('email')
export class EmailController {
    @Public()
    @Post('send-code')
    async sendCode(sendCodeDto: SendCodeDto): Promise<{ message: string }> {
        const response = await fetch(process.env.EMAIL_SERVICE_URL + '/send-code', {
            method: 'POST',
            body: JSON.stringify(sendCodeDto),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    }

    @Public()
    @Post('verify-code')
    async verifyCode(verifyCodeDto: VerifyCodeDto): Promise<{ message: string }> {
        const response = await fetch(process.env.EMAIL_SERVICE_URL + '/verify-code', {
            method: 'POST',
            body: JSON.stringify(verifyCodeDto),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        return data;
    }
}
