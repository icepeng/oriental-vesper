import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Expansion } from './expansion.entity';
import { CardResponse } from './card-response.entity';
import { CardClass, Rarity } from '../type/card.types';
import { CardStat } from './card-stat.entity';

@Entity()
export class Card {
  @PrimaryColumn() id: string;

  @ManyToOne(type => Expansion, expansion => expansion.cards)
  expansion: Expansion;

  @OneToMany(type => CardResponse, response => response.card)
  responses: CardResponse[];

  @OneToMany(type => CardStat, stat => stat.card)
  stats: CardStat[];

  @Column() cost: number;

  @Column('text') class: CardClass;

  @Column('text') rarity: Rarity;
}
