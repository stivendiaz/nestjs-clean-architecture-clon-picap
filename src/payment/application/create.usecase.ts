import { CreatePaymentDto } from '../infrastructure/dto/create_payment.dto';
import { PaymentModel } from '../domain/model/payment.model';
import { Injectable } from '@nestjs/common';
import { PaymentService } from '../infrastructure/service/payment.service';
import { AxiosResponse } from 'axios';
import { PaymentCreatedDto } from '../infrastructure/dto/payment_created.dto';

@Injectable()
export class CreatePaymentUseCase {
  constructor(private readonly paymentService: PaymentService) {}

  async execute(
    createPaymentDto: CreatePaymentDto,
  ): Promise<AxiosResponse<PaymentCreatedDto>> {
    const newPayment = await this.paymentService.createPaymentMethod(
      createPaymentDto,
    );
    return newPayment;
  }
}
