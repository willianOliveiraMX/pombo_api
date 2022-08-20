import { Timestamp } from 'typeorm';

export interface Contacts {
  id: number;
  name: string;
  nick_name: string;
  email: string;
  platforms: JSON;
  updatedat?: Timestamp;
  createdat?: Timestamp;
  isvalid: boolean;
  created_by: number;
  workspace_id: number;
}
