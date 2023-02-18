import { ApiProperty } from '@nestjs/swagger';

export class LocationDto {
  @ApiProperty({
    type: String,
  })
  readonly city: string;
  @ApiProperty({
    type: Number,
  })
  readonly longitude: number;
  @ApiProperty({
    type: Number,
  })
  readonly latitude: number;
}
