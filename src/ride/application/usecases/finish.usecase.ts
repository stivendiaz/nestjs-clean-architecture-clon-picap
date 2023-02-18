import { Injectable } from '@nestjs/common';
import {
  calculateMinutesFromCreation,
  calculateDistance,
  calculateAmount,
} from '../ride';
import { RideRepository } from '../../infrastructure/repository/ride.repository';
import { RideModel } from 'src/ride/domain/model/ride.model';

@Injectable()
export class FinishRideUseCase {
  constructor(private readonly rideRepository: RideRepository) {}

  async execute(id: number): Promise<RideModel> {
    const ride = await this.rideRepository.geyRideById(id);

    const minutes = calculateMinutesFromCreation(ride);
    const distance = calculateDistance(ride);
    const amount = calculateAmount({ distance, minutes });
    ride.amount = amount;

    return await this.rideRepository.finishRide(id, amount);
  }
}
