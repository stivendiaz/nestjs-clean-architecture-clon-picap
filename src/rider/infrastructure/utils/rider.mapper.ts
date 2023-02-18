import { CreateRiderDto } from 'src/rider/infrastructure/dto/create_rider.dto';
import { UpdateRiderDto } from 'src/rider/infrastructure/dto/update_rider.dto';
import { RiderModel } from 'src/rider/domain/model/rider.model';
import { Rider } from '../entity/rider.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderMapper {
  toEntity(rider: CreateRiderDto | UpdateRiderDto): Rider {
    const riderEntity = new Rider();
    riderEntity.name = rider.name;
    riderEntity.age = rider.age;
    riderEntity.email = rider.email;
    riderEntity.phone = rider.phone;
    riderEntity.city = rider.city;
    riderEntity.state = rider.state;
    return riderEntity;
  }

  toEntityWithContext(
    riderEntity: Rider,
    riderDto: CreateRiderDto | UpdateRiderDto,
  ): Rider {
    riderEntity.name = riderDto.name;
    riderEntity.age = riderDto.age;
    riderEntity.email = riderDto.email;
    riderEntity.phone = riderDto.phone;
    riderEntity.city = riderDto.city;
    riderEntity.state = riderDto.state;
    return riderEntity;
  }

  toDomain(rider: Rider): RiderModel {
    const riderDomain = new RiderModel();
    riderDomain.id = rider.id;
    riderDomain.name = rider.name;
    riderDomain.age = rider.age;
    riderDomain.email = rider.email;
    riderDomain.phone = rider.phone;
    riderDomain.city = rider.city;
    riderDomain.state = rider.state;
    return riderDomain;
  }
}
