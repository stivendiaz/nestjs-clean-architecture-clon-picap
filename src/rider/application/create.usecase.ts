import { CreateRiderDto } from '../infrastructure/dto/create_rider.dto';
import { RiderModel } from '../domain/model/rider.model';
import { RiderRepository } from '../infrastructure/repository/rider.repository';
import { RiderMapper } from '../infrastructure/utils/rider.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateRiderUseCase {
  constructor(
    private readonly riderRepository: RiderRepository,
    private readonly riderMapper: RiderMapper,
  ) {}

  async execute(createRiderDto: CreateRiderDto): Promise<RiderModel> {
    const newRider = await this.riderRepository.create(createRiderDto);
    return this.riderMapper.toDomain(newRider);
  }
}
