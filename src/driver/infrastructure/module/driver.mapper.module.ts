import { Module } from '@nestjs/common';
import { DriverMapper } from '../utils/driver.mapper';

@Module({
  providers: [DriverMapper],
  exports: [DriverMapper],
})
export class DriverMapperModule {}
