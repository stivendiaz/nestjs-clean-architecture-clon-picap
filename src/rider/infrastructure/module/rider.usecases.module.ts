import { Module } from '@nestjs/common';
import {
  CreateRiderUseCase,
  DeleteRiderUseCase,
  FindOneRiderUseCase,
  UpdateRiderUseCase,
} from '../../application/index';
import { RiderMapperModule } from './rider.mapper.module';
import { RiderRepositoryModule } from './rider.repository.module';

@Module({
  imports: [RiderRepositoryModule, RiderMapperModule],
  providers: [
    CreateRiderUseCase,
    DeleteRiderUseCase,
    FindOneRiderUseCase,
    UpdateRiderUseCase,
  ],
  exports: [
    CreateRiderUseCase,
    DeleteRiderUseCase,
    FindOneRiderUseCase,
    UpdateRiderUseCase,
  ],
})
export class RiderUseCasesModule {}
