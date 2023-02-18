import { Module } from '@nestjs/common';
import { RideMapper } from '../utils/ride.mapper';

@Module({
  providers: [RideMapper],
  exports: [RideMapper],
})
export class RideMapperModule {}
