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
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/entities/contact.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataBaseConfig,
      entities: [User, Workspace, Platform, Contact],
    }),
    UsersModule,
    WorkspacesModule,
    PlatformsModule,
    ContactsModule,
  ],
})
export class AppModule {}
