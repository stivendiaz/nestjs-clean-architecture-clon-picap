import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from './location.dto';

export class CreateRideDto {
  @ApiProperty({
    type: LocationDto,
  })
  readonly startLocation: LocationDto;
  @ApiProperty({
    type: LocationDto,
  })
  readonly endLocation: LocationDto;
  @ApiProperty({
    type: Number,
  })
  readonly riderId: number;
}
