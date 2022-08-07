import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreatePlatformDto } from './create-platform.dto';

export class UpdatePlatformDto extends PartialType(CreatePlatformDto) {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
