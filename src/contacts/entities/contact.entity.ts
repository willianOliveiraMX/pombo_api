import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';

@Entity('p_contacts')
export class Contact {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  nick_name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar', nullable: true })
  platforms: JSON;

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
