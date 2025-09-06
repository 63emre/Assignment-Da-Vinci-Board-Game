import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): User[] {
    return this.databaseService.readUsers();
  }

  findOne(id: number): User {
    const users = this.databaseService.readUsers();
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  create(createUserDto: CreateUserDto): User {
    const users = this.databaseService.readUsers();
    const nextId = Math.max(...users.map(u => u.id), 0) + 1;
    const newUser: User = {
      id: nextId,
      ...createUserDto,
    };
    users.push(newUser);
    this.databaseService.writeUsers(users);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const users = this.databaseService.readUsers();
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    users[userIndex] = { ...users[userIndex], ...updateUserDto };
    this.databaseService.writeUsers(users);
    return users[userIndex];
  }

  remove(id: number): void {
    const users = this.databaseService.readUsers();
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    users.splice(userIndex, 1);
    this.databaseService.writeUsers(users);
  }
}
