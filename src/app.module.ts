import { Module } from '@nestjs/common';
import { DriverController } from './driver/infrastructure/controller/driver.controller';
import { UseCasesModule } from './driver/infrastructure/module/usecases.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './driver/infrastructure/entity/driver.entity';
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
    UseCasesModule,
  ],
  controllers: [DriverController],
  providers: [],
})
export class AppModule {}
