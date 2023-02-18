import { Injectable } from '@nestjs/common';
import { RiderRepository } from '../infrastructure/repository/rider.repository';

@Injectable()
export class DeleteRiderUseCase {
  constructor(private readonly riderRepository: RiderRepository) {}

  async execute(id: number): Promise<void> {
    await this.riderRepository.delete(id);
  }
}
