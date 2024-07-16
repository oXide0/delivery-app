import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

    @Put('/update/:id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: Omit<UpdateUserDto, 'id'>) {
        return this.usersService.update({ id, ...updateUserDto });
    }

    @Delete('/delete/:id')
    async deleteUser(@Param('id') id: string) {
        await this.usersService.delete(id);
        return { message: 'User deleted' };
    }
}
