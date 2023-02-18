import { ApiProperty } from '@nestjs/swagger';
import { PaymentInformationDto } from './payment_information.dto';

export class PaymentCreatedDto {
  @ApiProperty({
    type: PaymentInformationDto,
  })
  readonly data: PaymentInformationDto;
}
