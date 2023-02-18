import { UpdateDriverDto } from '../infrastructure/dto/update_driver.dto';
import { DriverModel } from '../domain/model/driver.model';
import { DriverRepository } from '../infrastructure/repository/driver.repository';
import { DriverMapper } from '../infrastructure/utils/driver.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateDriverUseCase {
  constructor(
    private readonly driverRepository: DriverRepository,
    private readonly driverMapper: DriverMapper,
  ) {}

  async execute(id: number, driver: UpdateDriverDto): Promise<DriverModel> {
    const driverEntity = this.driverMapper.toEntity(driver);
    const updatedDriver = await this.driverRepository.update(id, driverEntity);
    return this.driverMapper.toDomain(updatedDriver);
  }
}
