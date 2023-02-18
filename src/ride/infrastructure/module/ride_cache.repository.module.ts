import { Module } from '@nestjs/common';
import { RideCacheRepository } from '../repository/ride.cache.repository';

@Module({
  imports: [],
  providers: [RideCacheRepository],
  exports: [RideCacheRepository],
})
export class RideCacheRepositoryModule {}
