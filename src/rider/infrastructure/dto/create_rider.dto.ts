import { ApiProperty } from '@nestjs/swagger';

export class CreateRiderDto {
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
  readonly city: string;
  @ApiProperty({
    type: String,
  })
  readonly state: string;
}
