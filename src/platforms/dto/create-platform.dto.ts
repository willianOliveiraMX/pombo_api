import { IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class CreatePlatformDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsJSON()
  meta_info: JSON;

  @IsString()
  created_by: string;

  @IsString()
  workspace_id: string;
}
