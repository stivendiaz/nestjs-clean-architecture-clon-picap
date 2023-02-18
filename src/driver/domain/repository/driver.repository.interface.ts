import { DriverModel } from '../model/driver.model';

export interface DriverRepositoryInterface {
  create(driver: DriverModel): Promise<DriverModel>;
  update(id: number, driver: DriverModel): Promise<DriverModel>;
  delete(id: number): Promise<void>;
  findOne(id: number): Promise<DriverModel>;
}
