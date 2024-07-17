import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcryptjs';
import { OrderService } from 'src/order/order.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { SignInUserDto } from './dto/signIn-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private orderService: OrderService
    ) {}

    async signIn(signInUserDto: SignInUserDto): Promise<{ accessToken: string; userId: string }> {
        const user = await this.userService.findByEmail(signInUserDto.email);
        if (!user) {
            throw new UnauthorizedException('User not found');
        }
        const isPasswordValid = await compare(signInUserDto.password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }
        const payload = { id: user.id, email: user.email };
        return {
            userId: user.id,
            accessToken: await this.jwtService.signAsync(payload),
        };
    }

    async register(createUserDto: CreateUserDto): Promise<{ accessToken: string; userId: string }> {
        const hashPassword = await hash(createUserDto.password, 5);
        const user = await this.userService.create({
            email: createUserDto.email,
            username: createUserDto.username,
            password: hashPassword,
        });
        this.orderService.create({ userId: user.id });
        const payload = { id: user.id, email: user.email };
        return {
            userId: user.id,
            accessToken: await this.jwtService.signAsync(payload),
        };
    }

    async checkUserExists(email: string): Promise<boolean> {
        const user = await this.userService.findByEmail(email);
        return !!user;
    }
}
