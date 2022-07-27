import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Users } from './users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const currentDate = new Date();

    return this.userRepository.save({
      ...createUserDto,
      createdat: currentDate,
    });
  }

  findAll() {
    return this.userRepository.find({ where: { isvalid: true } });
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id, isvalid: true });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const currentDate = new Date();

    return this.userRepository.update(id, {
      name: updateUserDto.name,
      updatedat: currentDate,
      isvalid: true,
    });
  }

  remove(id: number) {
    return this.userRepository.update(id, { isvalid: false });
  }
}
