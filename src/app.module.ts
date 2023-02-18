import { Module } from '@nestjs/common';
import { DriverController } from './driver/infrastructure/controller/driver.controller';
import { DriverUseCasesModule } from './driver/infrastructure/module/usecases.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { Driver } from './driver/infrastructure/entity/driver.entity';
import { Rider } from './rider/infrastructure/entity/rider.entity';
import { Ride } from './ride/infrastructure/entity/ride.entity';
import { RiderUseCasesModule } from './rider/infrastructure/module/rider.usecases.module';
import { RiderController } from './rider/infrastructure/controller/rider.controller';
import { RideUseCasesModule } from './ride/infrastructure/module/ride.usecases.module';
import { RideController } from './ride/infrastructure/controller/ride.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [Driver, Rider, Ride],
      synchronize: true,
    }),
    RedisModule.forRoot({
      config: {
        host: 'localhost',
        port: 6379,
      },
    }),
    DriverUseCasesModule,
    RiderUseCasesModule,
    RideUseCasesModule,
  ],
  controllers: [DriverController, RiderController, RideController],
  providers: [],
})
export class AppModule {}
