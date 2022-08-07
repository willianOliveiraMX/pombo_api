import { Timestamp } from 'typeorm';

export interface Platforms {
  id: number;
  name: string;
  meta_info: JSON;
  updatedat?: Timestamp;
  createdat?: Timestamp;
  isvalid: boolean;
  created_by: number;
  workspace_id: number;
}
