import { bootstrap } from 'vesper';
import { ExpansionController } from './controller/expansion.controller';
import { UserController } from './controller/user.controller';
import { CardResponse } from './entity/card-response.entity';
import { CardStat } from './entity/card-stat.entity';
import { Card } from './entity/card.entity';
import { ExpansionResponse } from './entity/expansion-response.entity';
import { ExpansionStat } from './entity/expansion-stat.entity';
import { Expansion } from './entity/expansion.entity';
import { SurveyResponse } from './entity/survey-response.entity';
import { Survey } from './entity/survey.entity';
import { User } from './entity/user.entity';

bootstrap({
  port: 3000,
  controllers: [ExpansionController, UserController],
  entities: [
    Expansion,
    Card,
    Survey,
    SurveyResponse,
    CardResponse,
    ExpansionResponse,
    CardStat,
    ExpansionStat,
    User,
  ],
  schemas: [__dirname + '/schema/**/*.graphql'],
})
  .then(() => {
    console.log(
      'Your app is up and running on http://localhost:3000. ' +
        'You can use playground in development mode on http://localhost:3000/playground',
    );
  })
  .catch(error => {
    console.error(error.stack ? error.stack : error);
  });
