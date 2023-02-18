import { Module } from '@nestjs/common';
import { CreatePaymentUseCase } from '../../application/index';

@Module({
  imports: [],
  providers: [CreatePaymentUseCase],
  exports: [CreatePaymentUseCase],
})
export class PaymentUseCasesModule {}
