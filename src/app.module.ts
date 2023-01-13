import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnviromentConfigModule } from './infraestructura/config/enviroment-config/enviroment-config.module';
import { LoggerModule } from './infraestructura/logger/logger.module';
import { ExceptionsModule } from './infraestructura/exceptions/exceptions.module';

@Module({
  imports: [EnviromentConfigModule, TypeOrmModule, LoggerModule, ExceptionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
