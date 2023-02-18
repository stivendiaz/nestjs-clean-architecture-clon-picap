import { CreateRideDto } from 'src/ride/infrastructure/dto/create_ride.dto';
import { RideModel } from 'src/ride/domain/model/ride.model';
import { Ride } from '../entity/ride.entity';
import { Injectable } from '@nestjs/common';
import { LocationDto } from '../dto/location.dto';

@Injectable()
export class RideMapper {
  toEntity(ride: CreateRideDto): Ride {
    const rideEntity = new Ride();
    rideEntity.endLocation = JSON.stringify(ride.endLocation);
    rideEntity.startLocation = JSON.stringify(ride.startLocation);
    rideEntity.riderId = ride.riderId;
    return rideEntity;
  }

  toEntityWithContext(rideEntity: Ride, rideDto: CreateRideDto): Ride {
    rideEntity.endLocation = JSON.stringify(rideDto.endLocation);
    rideEntity.startLocation = JSON.stringify(rideDto.startLocation);
    rideEntity.riderId = rideDto.riderId;
    return rideEntity;
  }

  dtoToDomain(ride: CreateRideDto): RideModel {
    const rideDomain = new RideModel();
    rideDomain.endLocation = ride.endLocation;
    rideDomain.startLocation = ride.startLocation;
    rideDomain.riderId = ride.riderId;
    rideDomain.createdAt = new Date();
    return rideDomain;
  }

  entityToDomain(ride: Ride): RideModel {
    const rideDomain = new RideModel();
    rideDomain.id = ride.id;
    rideDomain.endLocation = this.stringToLocation(ride.endLocation);
    rideDomain.startLocation = this.stringToLocation(ride.startLocation);
    rideDomain.riderId = ride.riderId;
    rideDomain.driverId = ride.driverId;
    rideDomain.status = ride.status;
    rideDomain.amount = ride.amount;
    rideDomain.createdAt = ride.createdAt;
    rideDomain.updatedAt = ride.updatedAt;
    return rideDomain;
  }

  private stringToLocation(location: string): LocationDto {
    return JSON.parse(location, (key, value) => {
      if (key !== '') return value; //logic of course should be more complex for handling nested objects etc.
      const locationDto = new LocationDto();
      return Object.assign(locationDto, value);
    });
  }
}
