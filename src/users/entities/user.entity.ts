import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('p_users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp' })
  createdat: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedat: string;

  @Column({ default: true })
  isvalid: boolean;
}
