import { RiderModel } from '../model/rider.model';

export interface RiderRepositoryInterface {
  create(rider: RiderModel): Promise<RiderModel>;
  update(id: number, rider: RiderModel): Promise<RiderModel>;
  delete(id: number): Promise<void>;
  findOne(id: number): Promise<RiderModel>;
}
