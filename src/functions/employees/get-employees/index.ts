import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getEmployees`,
  events: [
    {
      http: {
        method: 'get',
        path: 'get-employees',
      },
    },
  ],
};