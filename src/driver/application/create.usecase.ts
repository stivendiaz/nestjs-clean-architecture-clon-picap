import { CreateDriverDto } from '../infrastructure/dto/create_driver.dto';
import { DriverModel } from '../domain/model/driver.model';
import { DriverRepository } from '../infrastructure/repository/driver.repository';
import { DriverMapper } from '../infrastructure/utils/driver.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateDriverUseCase {
  constructor(
    private readonly driverRepository: DriverRepository,
    private readonly driverMapper: DriverMapper,
  ) {}

  async execute(createDriverDto: CreateDriverDto): Promise<DriverModel> {
    const newDriver = await this.driverRepository.create(createDriverDto);
    return this.driverMapper.toDomain(newDriver);
  }
}
