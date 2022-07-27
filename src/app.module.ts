import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import dataBaseConfig from './config/database.config';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataBaseConfig,
      entities: [User],
    }),
    UsersModule,
  ],
})
export class AppModule {}