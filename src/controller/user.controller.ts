import { EntityManager } from 'typeorm';
import { Controller, Query } from 'vesper';
import { Expansion } from '../entity/expansion.entity';
import { User } from '../entity/user.entity';

@Controller()
export class UserController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  user({ id }: { id: string }): Promise<User> {
    return this.entityManager.findOne(User, id);
  }
}
