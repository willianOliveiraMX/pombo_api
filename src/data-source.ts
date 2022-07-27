import 'reflect-metadata';
import { DataSource } from 'typeorm';
import dataBaseConfig from './config/database.config';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  ...dataBaseConfig,
  entities: [
    'src/entity/*.ts',
    './build/src/entity/*.js',
    'src/*.entity.ts',
    'src/**/entities/*.ts',
  ],
  migrations: ['src/migration/**/*.ts'],
});
