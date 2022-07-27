import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';

dotenv.config();

const dataBaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST_URL || 'localhost',
  port: parseInt(process.env.PORT_DATABASE) || 5432,
  username: process.env.USER_DATABASE || 'root',
  password: process.env.PASSWORD_DATABASE || '123',
  database: process.env.DATABASE_NAME || 'pombo_db',
  ...(process.env.ENV_STAGING && {
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }),
  logging: false,
};

export default dataBaseConfig;
