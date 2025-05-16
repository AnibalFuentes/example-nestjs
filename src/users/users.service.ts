import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getAllUsers() {
    return this.prisma.user.findMany({ orderBy: { name: 'asc' } });
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  createUser(user: CreateUserDto) {
    return this.prisma.user.create({ data: user });
  }
  updateUser(id: number, user: Partial<UpdateUserDto>) {
    // Solo actualiza los campos que se pasen en el body
    return this.prisma.user.update({
      where: { id },
      data: { ...user },
    });
  }
}
