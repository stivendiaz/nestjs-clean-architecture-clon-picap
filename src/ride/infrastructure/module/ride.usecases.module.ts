import { Module } from '@nestjs/common';
import { ConnectDriverUseCase } from 'src/ride/application/usecases/connect_driver.usecase';
import { DisconnectDriverUseCase } from 'src/ride/application/usecases/disconnect_driver.usecase';
import { FinishRideUseCase } from 'src/ride/application/usecases/finish.usecase';
import { StartRideUseCase } from 'src/ride/application/usecases/start.usecase';
import { RideMapperModule } from './ride.mapper.module';
import { RideRepositoryModule } from './ride.repository.module';
import { RideCacheRepositoryModule } from './ride_cache.repository.module';

@Module({
  imports: [RideRepositoryModule, RideCacheRepositoryModule, RideMapperModule],
  providers: [
    FinishRideUseCase,
    StartRideUseCase,
    ConnectDriverUseCase,
    DisconnectDriverUseCase,
  ],
  exports: [
    FinishRideUseCase,
    StartRideUseCase,
    ConnectDriverUseCase,
    DisconnectDriverUseCase,
  ],
})
export class RideUseCasesModule {}
