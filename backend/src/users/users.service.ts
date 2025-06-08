import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

export interface User{
  id: number;
  name: string;
  email: string;
}


@Injectable()
export class UsersService {
  private users: User[] = [];
  private currentId = 1;

  create(user: CreateUserDto): User {
    const nameExists = this.users.some(userDB => userDB.name === user.name)
    if (nameExists) {
      throw new BadRequestException("A user with the given name already exists.")
    }
    
    const emailExists = this.users.some(userDB => userDB.email === user.email)
    if (emailExists) {
      throw new BadRequestException("A user with the given email already exists.")
    }
    
    const newUser: User = {
      id: this.currentId++,
      name: user.name,
      email: user.email,
    };
    this.users.push(newUser)
    return newUser;
  }

  findAll() {
    return `This action returns all users`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
