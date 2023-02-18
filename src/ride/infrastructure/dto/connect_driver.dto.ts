import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location.dto';

export class ConnectDriverDto {
  @ApiProperty({
    type: LocationDto,
  })
  readonly currentLocation: LocationDto;
  @ApiProperty({
    type: Number,
  })
  readonly driverId: number;
}
