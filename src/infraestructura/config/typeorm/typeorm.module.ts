import { Module } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { EnviromentConfigService } from '../enviroment-config/enviroment-config.service';

export const getTypeOrmModuleOptions = (config: EnviromentConfigService): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: false,
    schema: process.env.DATABASE_SCHEMA,
    ssl: {
      rejectUnauthorized: false,
    },
  } as TypeOrmModuleOptions);

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [EnviromentConfigService],
      inject: [EnviromentConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class TypeOrmConfigModule  {}
