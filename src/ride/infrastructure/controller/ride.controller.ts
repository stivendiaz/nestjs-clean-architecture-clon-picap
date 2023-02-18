import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CreateRideDto } from '../dto/create_ride.dto';
import { RideModel } from 'src/ride/domain/model/ride.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import {
  ConnectDriverUseCase,
  DisconnectDriverUseCase,
  FinishRideUseCase,
  StartRideUseCase,
} from 'src/ride/application/usecases';
import { ConnectDriverDto } from '../dto/connect_driver.dto';
import { DisconnectDriverDto } from '../dto/disconnect_driver.dto';

@Controller('ride')
@ApiTags('ride')
export class RideController {
  constructor(
    private readonly connectDriverUseCase: ConnectDriverUseCase,
    private readonly disconnectDriverUseCase: DisconnectDriverUseCase,
    private readonly startRideUseCase: StartRideUseCase,
    private readonly finishRideUseCase: FinishRideUseCase,
  ) {}

  @Post('connect-driver')
  @ApiCreatedResponse({ type: RideModel })
  async connectDriver(
    @Body() connectDriverDto: ConnectDriverDto,
  ): Promise<RideModel> {
    return await this.connectDriverUseCase.execute(connectDriverDto);
  }

  @Post('disconnect-driver')
  @ApiCreatedResponse({ type: RideModel })
  async disconnectDriver(
    @Body() disconnectDriverDto: DisconnectDriverDto,
  ): Promise<void> {
    await this.disconnectDriverUseCase.execute(disconnectDriverDto);
  }

  @Post()
  @ApiCreatedResponse({ type: RideModel })
  async create(@Body() createRideDto: CreateRideDto): Promise<RideModel> {
    return await this.startRideUseCase.execute(createRideDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.finishRideUseCase.execute(id);
  }
}
