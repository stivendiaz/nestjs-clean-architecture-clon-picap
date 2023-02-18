import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PaymentService } from '../service/payment.service';

@Module({
  imports: [HttpModule],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentServiceModule {}
