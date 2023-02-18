import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location.dto';

export class DisconnectDriverDto {
  @ApiProperty({
    type: LocationDto,
  })
  readonly currentLocation: LocationDto;
  @ApiProperty({
    type: Number,
  })
  readonly driverId: number;
}
