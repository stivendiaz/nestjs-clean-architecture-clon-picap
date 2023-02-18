import { Injectable } from '@nestjs/common';
import { Driver } from '../infrastructure/entity/driver.entity';
import { DriverRepository } from '../infrastructure/repository/driver.repository';

@Injectable()
export class FindOneDriverUseCase {
  constructor(private readonly driverRepository: DriverRepository) {}

  async execute(id: number): Promise<Driver> {
    return await this.driverRepository.findOne(id);
  }
}
