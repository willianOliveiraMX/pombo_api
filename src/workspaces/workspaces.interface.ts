import { Timestamp } from 'typeorm';

export interface Workkspaces {
  id: number;
  name: string;
  description: string;
  updatedat?: Timestamp;
  createdat?: Timestamp;
  isvalid: boolean;
  created_by: number;
}
