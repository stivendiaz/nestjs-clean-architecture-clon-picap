import { Body, Controller, Post } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create_payment.dto';
import { CreatePaymentUseCase } from 'src/payment/application';
import { PaymentModel } from 'src/payment/domain/model/payment.model';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PaymentCreatedDto } from '../dto/payment_created.dto';
import { AxiosResponse } from 'axios';

@Controller('payment')
@ApiTags('payment')
export class PaymentController {
  constructor(private readonly createPaymentUseCase: CreatePaymentUseCase) {}

  @Post()
  @ApiCreatedResponse({ type: PaymentModel })
  async create(
    @Body() createPaymentDto: CreatePaymentDto,
  ): Promise<AxiosResponse<PaymentCreatedDto>> {
    return await this.createPaymentUseCase.execute(createPaymentDto);
  }
}
