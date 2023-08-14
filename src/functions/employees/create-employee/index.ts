import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.createEmployee`,
  events: [
    {
      http: {
        method: 'post',
        path: 'create-employee',
      },
    },
  ],
};
