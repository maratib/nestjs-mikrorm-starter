import { Logger } from '@nestjs/common';
import { SeedManager } from '@mikro-orm/seeder';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { defineConfig } from '@mikro-orm/postgresql';
// import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';
// import { MikroORM } from '@mikro-orm/core';

const logger = new Logger('MikroORM');

export default defineConfig({
  // driver: PostgreSqlDriver,
  entities: ['dist/entities'],
  entitiesTs: ['src/entities'],
  dbName: 'lompadb',
  host: 'localhost',
  user: 'maratib',
  password: '4344',
  port: 5432,
  debug: true,
  highlighter: new SqlHighlighter(),
  logger: logger.log.bind(logger),
  extensions: [SeedManager],
  seeder: {
    path: 'dist/orm/seeders',
    pathTs: 'src/orm/seeders',
    defaultSeeder: 'DatabaseSeeder',
    glob: '!(*.d).{js,ts}',
    emit: 'ts', // seeder generation mode
    fileName: (className: string) => className,
  },
});

// await MikroORM.init({
//   // default values:
//   migrations: {
//     tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
//     path: './migrations', // path to the folder with migrations
//     pathTs: undefined, // path to the folder with TS migrations (if used, you should put path to compiled files in `path`)
//     glob: '!(*.d).{js,ts}', // how to match migration files (all .js and .ts files, but not .d.ts)
//     transactional: true, // wrap each migration in a transaction
//     disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
//     allOrNothing: true, // wrap all migrations in master transaction
//     dropTables: true, // allow to disable table dropping
//     safe: false, // allow to disable table and column dropping
//     snapshot: true, // save snapshot when creating new migrations
//     emit: 'ts', // migration generation mode
//     generator: TSMigrationGenerator, // migration generator, e.g. to allow custom formatting
//   },
// });
