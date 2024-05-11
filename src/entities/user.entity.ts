import * as bcrypt from 'bcrypt';

import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity';

@Entity({ tableName: 'users' })
export class User extends BaseEntity {
  constructor(userName: string, password: string) {
    super();
    this.userName = userName;
    this.password = bcrypt.hashSync(password, 10);
  }

  @PrimaryKey({ type: 'uuid', defaultRaw: 'gen_random_uuid()' })
  uuid: string;

  @Property({ unique: true })
  public userName!: string;

  @Property()
  public password!: string;

  @Property()
  public refreshToken: string;
}
