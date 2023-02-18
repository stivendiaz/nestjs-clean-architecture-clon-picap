import { Injectable } from '@nestjs/common';
import { Rider } from '../infrastructure/entity/rider.entity';
import { RiderRepository } from '../infrastructure/repository/rider.repository';

@Injectable()
export class FindOneRiderUseCase {
  constructor(private readonly riderRepository: RiderRepository) {}

  async execute(id: number): Promise<Rider> {
    return await this.riderRepository.findOne(id);
  }
}
