import { LocationDto } from 'src/ride/infrastructure/dto/location.dto';

export class RideModel {
  id: number;
  startLocation: LocationDto;
  endLocation: LocationDto;
  riderId: number;
  driverId: number;
  status: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}
