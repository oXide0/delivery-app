import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

    @Post('/create')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Put('/update/:id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update({ ...updateUserDto, id });
    }

    @Delete('/delete/:id')
    async deleteUser(@Param('id') id: string) {
        await this.usersService.delete(id);
        return { message: 'User deleted' };
    }
}
