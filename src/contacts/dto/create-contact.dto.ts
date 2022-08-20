import { IsEmail, IsJSON, IsNotEmpty, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  nick_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsJSON()
  platforms: JSON;

  @IsString()
  @IsNotEmpty()
  created_by: string;

  @IsString()
  @IsNotEmpty()
  workspace_id: string;
}
