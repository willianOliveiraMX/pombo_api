import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateWorkspaceDto } from './create-workspace.dto';

export class UpdateWorkspaceDto extends PartialType(CreateWorkspaceDto) {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  name: string;

  @IsString()
  description: string;
}
