import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('p_workspaces')
export class Workspace {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'timestamp' })
  createdat: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedat: string;

  @Column({ default: true })
  isvalid: boolean;

  @Column()
  @OneToOne(() => User, (User) => User.id)
  created_by: number;
}
