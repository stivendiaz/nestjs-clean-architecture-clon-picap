import { ApiProperty } from '@nestjs/swagger';

export class PublicPaymentDataDto {
  @ApiProperty({
    type: String,
  })
  readonly type: string;
}
