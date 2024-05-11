import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { User } from '@/entities';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      driver: PostgreSqlDriver,
      // entities: ['dist/entities'],
      // entitiesTs: ['src/entities'],
      dbName: 'lompadb',
      host: 'localhost',
      user: 'maratib',
      password: '4344',
      port: 5432,
      debug: true,
      autoLoadEntities: true,
    }),
  ],
  exports: [MikroOrmModule],
})
export class OrmModule {}
