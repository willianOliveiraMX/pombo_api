import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import * as dotenv from 'dotenv';
import dataBaseConfig from './config/database.config';
import { Workspace } from './workspaces/entities/workspace.entity';
import { PlatformsModule } from './platforms/platforms.module';
import { Platform } from './platforms/entities/platform.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataBaseConfig,
      entities: [User, Workspace, Platform],
    }),
    UsersModule,
    WorkspacesModule,
    PlatformsModule,
  ],
})
export class AppModule {}
