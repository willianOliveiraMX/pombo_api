import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';

@Entity('p_platforms')
export class Platform {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ type: 'json' })
  meta_info: JSON;

  @Column({ type: 'timestamp' })
  createdat: Timestamp;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedat: Timestamp;

  @Column({ default: true })
  isvalid: boolean;

  @Column()
  @OneToOne(() => User, (User) => User.id)
  created_by: number;

  @Column()
  @OneToOne(() => Workspace, (Workspace) => Workspace.id)
  workspace_id: number;
}
