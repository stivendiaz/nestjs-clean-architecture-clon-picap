export class NearestDriverDto {
  constructor(driverId: number, distanceInKm: number) {
    this.driverId = driverId;
    this.distancInKm = distanceInKm;
  }
  readonly driverId: number;
  readonly distancInKm: number;
}
