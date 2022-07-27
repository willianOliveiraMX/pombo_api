import { Timestamp } from 'typeorm';

export interface Users {
  id: number;
  name: string;
  updatedat: Timestamp;
  createdat: Timestamp;
  isvalid: boolean;
}
