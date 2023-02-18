import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRiderDto } from '../dto/create_rider.dto';
import { UpdateRiderDto } from '../dto/update_rider.dto';
import {
  CreateRiderUseCase,
  UpdateRiderUseCase,
  DeleteRiderUseCase,
  FindOneRiderUseCase,
} from 'src/rider/application';
import { RiderModel } from 'src/rider/domain/model/rider.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@Controller('rider')
@ApiTags('rider')
export class RiderController {
  constructor(
    private readonly createRiderUseCase: CreateRiderUseCase,
    private readonly updateRiderUseCase: UpdateRiderUseCase,
    private readonly deleteRiderUseCase: DeleteRiderUseCase,
    private readonly findOneRiderUseCase: FindOneRiderUseCase,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: RiderModel })
  async create(@Body() createRiderDto: CreateRiderDto): Promise<RiderModel> {
    return await this.createRiderUseCase.execute(createRiderDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.findOneRiderUseCase.execute(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateRiderDto: UpdateRiderDto,
  ) {
    return await this.updateRiderUseCase.execute(id, updateRiderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.deleteRiderUseCase.execute(id);
  }
}
