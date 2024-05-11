import { User } from '@/entities';
import { Dictionary, EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';

export class UserSeeder extends Seeder {
  async run(em: EntityManager, context: Dictionary): Promise<void> {
    // save the entity to the context

    // context.user = em.persist(new User('maratib', 'passw0rd'));

    context.user = em.create(User, {
      userName: 'maratib',
      password: 'passw0rd',
      refreshToken: '',
    });

    context.user = em.create(User, {
      userName: 'musa',
      password: 'passw0rd',
      refreshToken: '',
    });
  }
}
