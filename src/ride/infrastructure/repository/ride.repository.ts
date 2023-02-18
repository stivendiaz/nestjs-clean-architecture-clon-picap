import { Injectable, Scope } from '@nestjs/common';
import { RideRepositoryInterface } from 'src/ride/domain/repository/ride.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ride } from '../entity/ride.entity';
import { RideMapper } from '../utils/ride.mapper';
import { RideModel } from 'src/ride/domain/model/ride.model';
import { RideStatusEnum } from 'src/ride/domain/enum/ride.status.enum';

@Injectable({ scope: Scope.REQUEST })
export class RideRepository implements RideRepositoryInterface {
  constructor(
    @InjectRepository(Ride)
    private readonly rideRepository: Repository<Ride>,
    private readonly rideMapper: RideMapper,
  ) {}

  async createRide(ride: RideModel, driverId: number): Promise<RideModel> {
    const newRide = this.rideMapper.toEntity(ride);
    newRide.driverId = driverId;
    newRide.status = RideStatusEnum.STARTED;
    console.log(newRide);

    return this.rideMapper.entityToDomain(
      await this.rideRepository.save(newRide),
    );
  }

  async finishRide(id: number, amount: number): Promise<RideModel> {
    const ride = await this.rideRepository.findOneBy({ id });
    ride.amount = amount;
    ride.status = RideStatusEnum.FINISHED;
    return this.rideMapper.entityToDomain(await this.rideRepository.save(ride));
  }

  async geyRideById(id: number): Promise<RideModel> {
    return this.rideMapper.entityToDomain(
      await this.rideRepository.findOneBy({ id }),
    );
  }
}
