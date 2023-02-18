import { RideModel } from '../model/ride.model';

export interface RideRepositoryInterface {
  createRide(ride: RideModel, driverId: number): Promise<RideModel>;
  finishRide(id: number, amount: number);
  geyRideById(id: number): Promise<RideModel>;
}
