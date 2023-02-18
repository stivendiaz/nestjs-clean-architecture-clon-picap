import { Module } from '@nestjs/common';
import { DriverController } from './driver/infrastructure/controller/driver.controller';
import { DriverUseCasesModule } from './driver/infrastructure/module/usecases.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './driver/infrastructure/entity/driver.entity';
import { RiderUseCasesModule } from './rider/infrastructure/module/rider.usecases.module';
import { RiderController } from './rider/infrastructure/controller/rider.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'test',
      password: 'test',
      database: 'test',
      entities: [Driver],
      synchronize: true,
    }),
    DriverUseCasesModule,
    RiderUseCasesModule,
  ],
  controllers: [DriverController, RiderController],
  providers: [],
})
export class AppModule {}
