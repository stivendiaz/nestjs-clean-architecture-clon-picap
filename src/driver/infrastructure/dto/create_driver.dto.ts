import { ApiProperty } from '@nestjs/swagger';

export class CreateDriverDto {
  @ApiProperty({
    type: String,
  })
  readonly name: string;
  @ApiProperty({
    type: Number,
    minimum: 18,
  })
  readonly age: number;
  @ApiProperty({
    type: String,
  })
  readonly email: string;
  @ApiProperty({
    type: String,
  })
  readonly phone: string;
  @ApiProperty({
    type: String,
  })
  readonly address: string;
  @ApiProperty({
    type: String,
  })
  readonly city: string;
  @ApiProperty({
    type: String,
  })
  readonly state: string;
  @ApiProperty({
    type: String,
  })
  readonly license: string;
  @ApiProperty({
    type: String,
  })
  readonly licenseExpiration: string;
}
