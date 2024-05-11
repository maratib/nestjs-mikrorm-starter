import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { config as dotenvConfig } from 'dotenv';
import { plainToClass } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';
import { ConfigModule, registerAs } from '@nestjs/config';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Logger } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

dotenvConfig({ path: '.env' });

class EnvironmentVariables {
  @IsNumber()
  PORT: number;

  @IsString()
  DB_HOST: string;

  @IsNumber()
  DB_PORT: number;

  @IsString()
  DB_USERNAME: string;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_NAME: string;

  @IsString()
  JWT_ACCESS_TOKEN_SECRET: string;

  @IsNumber()
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: number;

  @IsString()
  JWT_REFRESH_TOKEN_SECRET: string;

  @IsNumber()
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: number;
}

export function validateEnvironment(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}

/******* MikroORM Setup */
const logger = new Logger('MikroORM');

// export default defineConfig({
//   entities: ['./dist/entities'],
//   entitiesTs: ['./src/entities'],
//   host: 'localhost',
//   dbName: 'lompadb',
//   port: 5432,
//   highlighter: new SqlHighlighter(),
//   debug: true,
//   logger: logger.log.bind(logger),
// });

export const MikroOrmConfigModule = MikroOrmModule.forRoot({
  driver: PostgreSqlDriver,
  entities: ['dist/entities'],
  entitiesTs: ['src/entities'],
  dbName: 'lompadb',
  host: 'localhost',
  user: 'maratib',
  password: '4344',
  port: 5432,
  debug: true,
  autoLoadEntities: true,
});
