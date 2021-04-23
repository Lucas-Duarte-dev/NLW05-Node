import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity("connections")
export class Connection {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  admin_id: string;

  @JoinColumn({ name: "user_id" })
  @OneToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @Column()
  socket_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
