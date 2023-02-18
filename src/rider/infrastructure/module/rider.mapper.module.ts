import { Module } from '@nestjs/common';
import { RiderMapper } from '../utils/rider.mapper';

@Module({
  providers: [RiderMapper],
  exports: [RiderMapper],
})
export class RiderMapperModule {}
