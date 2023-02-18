import { Injectable, Scope } from '@nestjs/common';
import { CreateRiderDto } from 'src/rider/infrastructure/dto/create_rider.dto';
import { UpdateRiderDto } from 'src/rider/infrastructure/dto/update_rider.dto';
import { RiderRepositoryInterface } from 'src/rider/domain/repository/rider.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rider } from '../entity/rider.entity';
import { RiderMapper } from '../utils/rider.mapper';

@Injectable({ scope: Scope.REQUEST })
export class RiderRepository implements RiderRepositoryInterface {
  private readonly riderMapper: RiderMapper;

  constructor(
    @InjectRepository(Rider)
    private readonly riderRepository: Repository<Rider>,
  ) {
    this.riderMapper = new RiderMapper();
  }

  async create(rider: CreateRiderDto): Promise<Rider> {
    const newRider = this.riderMapper.toEntity(rider);
    return await this.riderRepository.save(newRider);
  }

  async update(id: number, rider: UpdateRiderDto): Promise<Rider> {
    const currentRider = await this.riderRepository.findOneBy({ id });
    const updatedRider = this.riderMapper.toEntityWithContext(
      currentRider,
      rider,
    );
    return await this.riderRepository.save(updatedRider);
  }

  async delete(id: number): Promise<void> {
    await this.riderRepository.delete(id);
  }

  async findOne(id: number): Promise<Rider> {
    return await this.riderRepository.findOneBy({ id });
  }
}
