import { ApiProperty } from '@nestjs/swagger';

export class CreatePaymentDto {
  @ApiProperty({
    type: String,
  })
  readonly type: string;
  @ApiProperty({
    type: String,
  })
  readonly token: string;
  @ApiProperty({
    type: String,
  })
  readonly acceptance_token: string;
  @ApiProperty({
    type: String,
  })
  readonly customer_email: string;
}
