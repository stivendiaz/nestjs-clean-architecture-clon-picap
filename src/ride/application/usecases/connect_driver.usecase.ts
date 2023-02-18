import { Injectable } from '@nestjs/common';
import { ConnectDriverDto } from '../../infrastructure/dto/connect_driver.dto';
import { RideCacheRepository } from '../../infrastructure/repository/ride.cache.repository';

@Injectable()
export class ConnectDriverUseCase {
  constructor(private readonly rideCacheRepository: RideCacheRepository) {}

  async execute(connectDriverDto: ConnectDriverDto): Promise<any> {
    await this.rideCacheRepository.connectDriver(connectDriverDto);
  }
}
