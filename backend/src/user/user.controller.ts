import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Put('/update/:id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: Omit<UpdateUserDto, 'id'>) {
        return this.userService.update({ id, ...updateUserDto });
    }

    @Delete('/delete/:id')
    async deleteUser(@Param('id') id: string) {
        await this.userService.delete(id);
        return { message: 'User deleted' };
    }
}
