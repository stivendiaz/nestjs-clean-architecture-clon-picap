import { RideModel } from '../domain/model/ride.model';
import { getDistance } from 'geolib';

export function calculateMinutesFromCreation(ride: RideModel): number {
  const now = new Date();
  console.log('creationDate', ride.createdAt);
  const diff = Math.abs(now.getTime() - ride.createdAt.getTime());
  return Math.floor(diff / 1000 / 60);
}

export function calculateDistance(ride: RideModel): number {
  const distance = getDistance(ride.startLocation, ride.endLocation);
  return Math.floor(distance / 1000);
}

export function calculateAmount({ distance, minutes }): number {
  const amount = distance * 1000 + minutes * 200;
  return amount;
}
