import { EntityManager } from 'typeorm';
import { Controller, Query } from 'vesper';
import { Expansion } from '../entity/expansion.entity';

@Controller()
export class ExpansionController {
  constructor(private entityManager: EntityManager) {}

  @Query()
  expansions(): Promise<Expansion[]> {
    return this.entityManager.find(Expansion);
  }

  @Query()
  expansion({ code }: { code: string }): Promise<Expansion> {
    return this.entityManager.findOne(Expansion, { code });
  }
}
