import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnviromentConfigModule } from './infraestructura/config/enviroment-config/enviroment-config.module';
import { LoggerModule } from './infraestructura/logger/logger.module';
import { ExceptionsModule } from './infraestructura/exceptions/exceptions.module';
import { RepositoriesModule } from './infraestructura/repositories/repositories.module';

@Module({
  imports: [EnviromentConfigModule, TypeOrmModule, LoggerModule, ExceptionsModule, RepositoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
