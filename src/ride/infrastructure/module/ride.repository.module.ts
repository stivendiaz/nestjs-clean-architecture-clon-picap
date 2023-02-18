import { Module } from '@nestjs/common';
import { Ride } from '../entity/ride.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RideRepository } from '../repository/ride.repository';
import { RideMapperModule } from './ride.mapper.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ride]), RideMapperModule],
  providers: [RideRepository],
  exports: [RideRepository],
})
export class RideRepositoryModule {}
