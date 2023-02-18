import { Injectable } from '@nestjs/common';
import { DisconnectDriverDto } from 'src/ride/infrastructure/dto/disconnect_driver.dto';
import { RideCacheRepository } from '../../infrastructure/repository/ride.cache.repository';

@Injectable()
export class DisconnectDriverUseCase {
  constructor(private readonly rideCacheRepository: RideCacheRepository) {}

  async execute(disconnectDriver: DisconnectDriverDto): Promise<void> {
    await this.rideCacheRepository.disconnectDriver(disconnectDriver);
  }
}
