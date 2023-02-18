import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from '../dto/create_payment.dto';
import { PaymentCreatedDto } from '../dto/payment_created.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';

@Injectable()
export class PaymentService {
  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService,
  ) {}

  createPaymentMethod(
    createPaymentDto: CreatePaymentDto,
  ): Promise<AxiosResponse<PaymentCreatedDto>> {
    const config = {
      headers: {
        Authorization: 'Bearer ' + 'WOMPI_SECRET_KEY',
      },
    };

    return this.httpService.axiosRef.post(
      'https://production.wompi.co/v1/payment_sources',
      createPaymentDto,
      config,
    );
  }
}
