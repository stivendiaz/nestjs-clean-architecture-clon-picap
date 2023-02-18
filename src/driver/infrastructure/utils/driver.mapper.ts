import { CreateDriverDto } from 'src/driver/infrastructure/dto/create_driver.dto';
import { UpdateDriverDto } from 'src/driver/infrastructure/dto/update_driver.dto';
import { DriverModel } from 'src/driver/domain/model/driver.model';
import { Driver } from '../entity/driver.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DriverMapper {
  toEntity(driver: CreateDriverDto | UpdateDriverDto): Driver {
    const driverEntity = new Driver();
    driverEntity.name = driver.name;
    driverEntity.age = driver.age;
    driverEntity.email = driver.email;
    driverEntity.phone = driver.phone;
    driverEntity.address = driver.address;
    driverEntity.city = driver.city;
    driverEntity.state = driver.state;
    driverEntity.license = driver.license;
    driverEntity.licenseExpiration = driver.licenseExpiration;
    return driverEntity;
  }

  toEntityWithContext(
    driverEntity: Driver,
    driverDto: CreateDriverDto | UpdateDriverDto,
  ): Driver {
    driverEntity.name = driverDto.name;
    driverEntity.age = driverDto.age;
    driverEntity.email = driverDto.email;
    driverEntity.phone = driverDto.phone;
    driverEntity.address = driverDto.address;
    driverEntity.city = driverDto.city;
    driverEntity.state = driverDto.state;
    driverEntity.license = driverDto.license;
    driverEntity.licenseExpiration = driverDto.licenseExpiration;
    return driverEntity;
  }

  toDomain(driver: Driver): DriverModel {
    const driverDomain = new DriverModel();
    driverDomain.id = driver.id;
    driverDomain.name = driver.name;
    driverDomain.age = driver.age;
    driverDomain.email = driver.email;
    driverDomain.phone = driver.phone;
    driverDomain.address = driver.address;
    driverDomain.city = driver.city;
    driverDomain.state = driver.state;
    driverDomain.license = driver.license;
    driverDomain.licenseExpiration = driver.licenseExpiration;
    return driverDomain;
  }
}
