import { CreateRideDto } from '../../infrastructure/dto/create_ride.dto';
import { RideRepository } from '../../infrastructure/repository/ride.repository';
import { Injectable } from '@nestjs/common';
import { RideCacheRepository } from '../../infrastructure/repository/ride.cache.repository';
import { RideMapper } from '../../infrastructure/utils/ride.mapper';

@Injectable()
export class StartRideUseCase {
  constructor(
    private readonly rideCacheRepository: RideCacheRepository,
    private readonly rideRepository: RideRepository,
    private readonly rideMapper: RideMapper,
  ) {}

  async execute(createRideDto: CreateRideDto): Promise<any> {
    const nearestDriver = await this.rideCacheRepository.getNearestDriver(
      createRideDto.startLocation,
    );
    if (nearestDriver) {
      console.log('nearestDriver', nearestDriver);
      const rideModel = this.rideMapper.dtoToDomain(createRideDto);
      return await this.rideRepository.createRide(
        rideModel,
        nearestDriver.driverId,
      );
    } else {
      throw new Error('No drivers available');
    }
  }
}
