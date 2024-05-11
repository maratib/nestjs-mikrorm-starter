import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@/entities';
import { EntityManager, EntityRepository } from '@mikro-orm/postgresql';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repo: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    await this.em.flush();
    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
