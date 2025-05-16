import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all users',
    description: 'Get all users this table users in db',
  })
  @ApiResponse({
    status: 200,
    description: 'Return all users',
  })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get user by Id' })
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create an user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
  })
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.createUser(user);
  }

  @Post(':id')
  @ApiOperation({ summary: 'Update an user' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
  })
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(parseInt(id), user);
  }
}
