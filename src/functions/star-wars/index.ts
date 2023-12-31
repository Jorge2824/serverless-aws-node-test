import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getPeopleStarWars`,
  events: [
    {
      http: {
        method: 'get',
        path: 'get-people-star-wars',
      },
    },
  ],
};
