import { Injectable } from '@nestjs/common';
import { DriverRepository } from '../infrastructure/repository/driver.repository';

@Injectable()
export class DeleteDriverUseCase {
  constructor(private readonly driverRepository: DriverRepository) {}

  async execute(id: number): Promise<void> {
    await this.driverRepository.delete(id);
  }
}
