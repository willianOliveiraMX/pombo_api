import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace } from './entities/workspace.entity';
import { Workkspaces } from './workspaces.interface';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectRepository(Workspace)
    private readonly workspaceRepository: Repository<Workkspaces>,
  ) {}

  create(createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceRepository.save({
      name: createWorkspaceDto.name,
      description: createWorkspaceDto.description,
      createdat: new Date(),
      created_by: parseInt(createWorkspaceDto.created_by),
    });
  }

  findAll() {
    return this.workspaceRepository.find({ where: { isvalid: true } });
  }

  findOne(id: number) {
    return this.workspaceRepository.findOneBy({ id: id, isvalid: true });
  }

  update(id: number, updateWorkspaceDto: UpdateWorkspaceDto) {
    return this.workspaceRepository.update(id, {
      name: updateWorkspaceDto.name,
      updatedat: new Date(),
      isvalid: true,
    });
  }

  remove(id: number) {
    return this.workspaceRepository.update(id, {
      updatedat: new Date(),
      isvalid: false,
    });
  }
}
