import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { Platform } from './entities/platform.entity';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectRepository(Platform)
    private readonly platformRepository: Repository<Platform>,
  ) {}

  create(createPlatformDto: CreatePlatformDto) {
    return this.platformRepository.save({
      name: createPlatformDto.name,
      meta_info: createPlatformDto.meta_info,
      created_by: parseInt(createPlatformDto.created_by),
      workspace_id: parseInt(createPlatformDto.workspace_id),
      createdat: new Date(),
    });
  }

  findAll() {
    return this.platformRepository.find({ where: { isvalid: true } });
  }

  findOne(id: number) {
    return this.platformRepository.findOneBy({ id: id, isvalid: true });
  }

  update(id: number, updatePlatformDto: UpdatePlatformDto) {
    return this.platformRepository.update(id, {
      name: updatePlatformDto.name,
      updatedat: new Date(),
      isvalid: true,
    });
  }

  remove(id: number) {
    return this.platformRepository.update(id, {
      updatedat: new Date(),
      isvalid: false,
    });
  }
}
