import { Module } from '@nestjs/common';
import { Rider } from '../entity/rider.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiderRepository } from '../repository/rider.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Rider])],
  providers: [RiderRepository],
  exports: [RiderRepository],
})
export class RiderRepositoryModule {}
