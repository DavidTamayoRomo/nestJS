import { Module } from '@nestjs/common';
import { EnviromentConfigService } from './enviroment-config.service';

@Module({
  providers: [EnviromentConfigService]
})
export class EnviromentConfigModule {}
