import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async signIn(id: string, pwd: string): Promise<{ accessToken: string }> {
        const user = await this.usersService.findById(id);
        if (user.password !== pwd) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }

    async register(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
        const user = await this.usersService.create({ ...createUserDto });
        const payload = { sub: user.id, username: user.username };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
}
