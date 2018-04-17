import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

import { Card } from './card.entity';
import { SurveyResponse } from './survey-response.entity';

@Entity()
export class CardResponse {
  @ManyToOne(type => SurveyResponse, response => response.cardResponses, {
    primary: true,
  })
  response: SurveyResponse;

  @PrimaryColumn() cardId: string;

  @ManyToOne(type => Card, card => card.responses, { primary: true })
  @JoinColumn({ name: 'cardId' })
  card: Card;

  @Column() power: number;

  @Column() generality: number;

  @Column('text') description: string;
}
