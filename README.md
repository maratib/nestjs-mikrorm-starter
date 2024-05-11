# Nest.js MikroORM Starter

#### Nest.js, MikroORM, JWT Auth, Postgres

```bash
# DB Commands
yarn db:sync
yarn db:drop
yarn db
```

## Open SSL

[Certificate Commands](https://github.com/officialcomputerbaba/amazing-nestjs/blob/main/Fundamentals/lecture-38/cert/README.md)

```bash
openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem
```

```javascript
const httpsOptions = {
  key: readFileSync(resolve(__dirname, '../cert/key.pem')),
  cert: readFileSync(resolve(__dirname, '../cert/certificate.pem')),
};
```

## MikroORM

```bash
yarn add @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql
yarn add -D @mikro-orm/cli @mikro-orm/seeder

npx mikro-orm schema:create --dump   # Dumps create schema SQL
npx mikro-orm schema:update --dump   # Dumps update schema SQL
npx mikro-orm schema:drop --dump     # Dumps drop schema SQL


```

[Migrations](https://mikro-orm.io/docs/schema-generator)

```javascript
"mikro-orm": {
    "useTsNode": true,
    "configPaths": [
      "./src/mikro-orm.config.ts",
      "./dist/mikro-orm.config.js"
    ],
  }
```

## Auth

```bash
yarn add @nestjs/passport passport passport-local passport-jwt @nestjs/jwt bcrypt

yarn add -D @types/passport-jwt
```

### Issues :

1. Fix Service Testings

```

```
