import { Injectable } from '@nestjs/common';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import Redis from 'ioredis';
import { ConnectDriverDto } from '../dto/connect_driver.dto';
import { LocationDto } from '../dto/location.dto';
import { RideCacheRepositoryInterface } from 'src/ride/domain/repository/ride_cache.repository.interface';
import { NearestDriverDto } from '../dto/neares_driver.dto';
import { DisconnectDriverDto } from '../dto/disconnect_driver.dto';

@Injectable()
export class RideCacheRepository implements RideCacheRepositoryInterface {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async connectDriver(connectDriverDto: ConnectDriverDto): Promise<void> {
    await this.redis.geoadd(
      connectDriverDto.currentLocation.city,
      connectDriverDto.currentLocation.longitude,
      connectDriverDto.currentLocation.latitude,
      connectDriverDto.driverId.toString(),
    );
  }

  async disconnectDriver(disconnectDriver: DisconnectDriverDto): Promise<void> {
    await this.redis.zrem(
      disconnectDriver.currentLocation.city,
      disconnectDriver.driverId.toString(),
    );
  }

  async getNearestDriver(LocationDto: LocationDto): Promise<NearestDriverDto> {
    // get nearest point from longitude and latitude
    const result = await this.redis.geosearch(
      LocationDto.city,
      'FROMLONLAT',
      LocationDto.longitude,
      LocationDto.latitude,
      'BYRADIUS',
      50,
      'km',
      'WITHDIST',
      'ASC',
      'COUNT',
      1,
    );
    const [takeOne] = result;

    return new NearestDriverDto(+takeOne[0], +takeOne[1]);
  }
}
