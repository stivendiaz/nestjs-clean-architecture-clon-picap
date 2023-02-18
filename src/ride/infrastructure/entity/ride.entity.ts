import { RideStatusEnum } from 'src/ride/domain/enum/ride.status.enum';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  startLocation: string;
  @Column()
  endLocation: string;
  @Column()
  riderId: number;
  @Column({ default: RideStatusEnum.STARTED })
  status: string;
  @Column({ default: 0 })
  amount: number;
  @Column()
  driverId: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
