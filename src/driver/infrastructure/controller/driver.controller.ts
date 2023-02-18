import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDriverDto } from '../dto/create_driver.dto';
import { UpdateDriverDto } from '../dto/update_driver.dto';
import {
  CreateDriverUseCase,
  UpdateDriverUseCase,
  DeleteDriverUseCase,
  FindOneDriverUseCase,
} from 'src/driver/application';
import { DriverModel } from 'src/driver/domain/model/driver.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('driver')
@ApiTags('driver')
export class DriverController {
  constructor(
    private readonly createDriverUseCase: CreateDriverUseCase,
    private readonly updateDriverUseCase: UpdateDriverUseCase,
    private readonly deleteDriverUseCase: DeleteDriverUseCase,
    private readonly findOneDriverUseCase: FindOneDriverUseCase,
  ) {}

  @Post()
  async create(@Body() createDriverDto: CreateDriverDto): Promise<DriverModel> {
    return await this.createDriverUseCase.execute(createDriverDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.findOneDriverUseCase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDriverDto: UpdateDriverDto,
  ) {
    return await this.updateDriverUseCase.execute(id, updateDriverDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.deleteDriverUseCase.execute(id);
  }
}
