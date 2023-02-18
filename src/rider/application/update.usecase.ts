import { UpdateRiderDto } from '../infrastructure/dto/update_rider.dto';
import { RiderModel } from '../domain/model/rider.model';
import { RiderRepository } from '../infrastructure/repository/rider.repository';
import { RiderMapper } from '../infrastructure/utils/rider.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateRiderUseCase {
  constructor(
    private readonly riderRepository: RiderRepository,
    private readonly riderMapper: RiderMapper,
  ) {}

  async execute(id: number, rider: UpdateRiderDto): Promise<RiderModel> {
    const riderEntity = this.riderMapper.toEntity(rider);
    const updatedRider = await this.riderRepository.update(id, riderEntity);
    return this.riderMapper.toDomain(updatedRider);
  }
}
