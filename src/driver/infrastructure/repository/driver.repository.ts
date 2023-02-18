import { Injectable, Scope } from '@nestjs/common';
import { CreateDriverDto } from 'src/driver/infrastructure/dto/create_driver.dto';
import { UpdateDriverDto } from 'src/driver/infrastructure/dto/update_driver.dto';
import { DriverRepositoryInterface } from 'src/driver/domain/repository/driver.repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from '../entity/driver.entity';
import { DriverMapper } from '../utils/driver.mapper';

@Injectable({ scope: Scope.REQUEST })
export class DriverRepository implements DriverRepositoryInterface {
  private readonly driverMapper: DriverMapper;

  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) {
    this.driverMapper = new DriverMapper();
  }

  async create(driver: CreateDriverDto): Promise<Driver> {
    const newDriver = this.driverMapper.toEntity(driver);
    return await this.driverRepository.save(newDriver);
  }

  async update(id: number, driver: UpdateDriverDto): Promise<Driver> {
    const currentDriver = await this.driverRepository.findOneBy({ id });
    const updatedDriver = this.driverMapper.toEntityWithContext(
      currentDriver,
      driver,
    );
    return await this.driverRepository.save(updatedDriver);
  }

  async delete(id: number): Promise<void> {
    await this.driverRepository.delete(id);
  }

  async findOne(id: number): Promise<Driver> {
    return await this.driverRepository.findOneBy({ id });
  }
}
