import { Module } from '@nestjs/common';
import { Driver } from '../entity/driver.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverRepository } from '../repository/driver.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriverRepository],
  exports: [DriverRepository],
})
export class DriverRepositoryModule {}
