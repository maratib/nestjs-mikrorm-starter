import { Module } from '@nestjs/common';

// import { AuthModule } from '../auth/auth.module';
import { UserModule } from './user/user.module';
import { OrmModule } from './orm/orm.module';

@Module({
  imports: [OrmModule, UserModule],
})
export class AppModule {}
