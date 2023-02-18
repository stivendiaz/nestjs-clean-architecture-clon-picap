import { Module } from '@nestjs/common';
import {
  CreateDriverUseCase,
  DeleteDriverUseCase,
  FindOneDriverUseCase,
  UpdateDriverUseCase,
} from '../../application/index';
import { DriverMapperModule } from './driver.mapper.module';
import { DriverRepositoryModule } from './driver.repository.module';

@Module({
  imports: [DriverRepositoryModule, DriverMapperModule],
  providers: [
    CreateDriverUseCase,
    DeleteDriverUseCase,
    FindOneDriverUseCase,
    UpdateDriverUseCase,
  ],
  exports: [
    CreateDriverUseCase,
    DeleteDriverUseCase,
    FindOneDriverUseCase,
    UpdateDriverUseCase,
  ],
})
export class DriverUseCasesModule {}
