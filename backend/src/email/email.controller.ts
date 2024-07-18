import { Body, Controller, Post } from '@nestjs/common';
import { Public } from 'src/decorators/public.decorator';
import { EmailService } from './email.service';
import { SendCodeDto } from './dto/send-code.dto';
import { VerifyCodeDto } from './dto/verify-code.dto';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) {}

    @Public()
    @Post('send-code')
    async sendCode(@Body() sendCodeDto: SendCodeDto): Promise<{ message: string }> {
        return this.emailService.sendCode(sendCodeDto);
    }

    @Public()
    @Post('verify-code')
    async verifyCode(@Body() verifyCodeDto: VerifyCodeDto): Promise<{ message: string }> {
        return this.emailService.verifyCode(verifyCodeDto);
    }
}
