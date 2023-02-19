import { Module } from '@nestjs/common';
import { DriverController } from './driver/infrastructure/controller/driver.controller';
import { DriverUseCasesModule } from './driver/infrastructure/module/usecases.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { RiderUseCasesModule } from './rider/infrastructure/module/rider.usecases.module';
import { RiderController } from './rider/infrastructure/controller/rider.controller';
import { RideUseCasesModule } from './ride/infrastructure/module/ride.usecases.module';
import { RideController } from './ride/infrastructure/controller/ride.controller';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './shared/config/helper/';
import { TypeOrmConfigService } from './shared/infrastructure/typeorm/typeorm.serive';
import { PaymentUseCasesModule } from './payment/infrastructure/module/payment.usecases.module';
import { PaymentController } from './payment/infrastructure/controller/payment.controller';

const envFilePath: string = getEnvPath(`${__dirname}/shared/config/envs/`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    RedisModule.forRoot({
      config: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
      },
    }),
    DriverUseCasesModule,
    RiderUseCasesModule,
    RideUseCasesModule,
    PaymentUseCasesModule,
  ],
  controllers: [
    DriverController,
    RiderController,
    RideController,
    PaymentController,
  ],
  providers: [],
})
export class AppModule {}
