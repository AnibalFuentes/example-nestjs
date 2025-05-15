import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: any[] = [
    { id: 1, name: 'User 1', phone: '23423423' },
    { id: 2, name: 'User 2', phone: '23423423' },
    { id: 3, name: 'User 3', phone: '23423423' },
  ];

  getAllUsers() {
    return this.users;
  }

  createUser(user: CreateUserDto) {
    this.users.push(user);
    return {
      ...user,
      id: this.users.length + 1,
    };
  }
}
