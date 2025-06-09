import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { User, UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(201)
  create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.usersService.findAll();
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    this.usersService.remove(id)
    return;
  }
}
