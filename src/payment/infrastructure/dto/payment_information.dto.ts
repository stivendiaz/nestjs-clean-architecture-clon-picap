import { ApiProperty } from '@nestjs/swagger';
import { PublicPaymentDataDto } from './public_payment_data';

export class PaymentInformationDto {
  @ApiProperty({
    type: String,
  })
  readonly id: string;
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
  readonly status: string;
  @ApiProperty({
    type: String,
  })
  readonly customer_email: string;
  @ApiProperty({
    type: PublicPaymentDataDto,
  })
  readonly public_data: PublicPaymentDataDto;
}
