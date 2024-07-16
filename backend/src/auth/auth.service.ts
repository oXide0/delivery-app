import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { hash, compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(email: string, password: string): Promise<{ accessToken: string }> {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }
        const payload = { id: user.id, email: user.email };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }

    async register(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
        const hashPassword = await hash(createUserDto.password, 5);
        const user = await this.userService.create({
            email: createUserDto.email,
            username: createUserDto.username,
            password: hashPassword,
        });
        const payload = { id: user.id, email: user.email };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
}
