import '@testing-library/jest-dom';
import { http, HttpResponse} from 'msw';

export const handlers = [
  http.get('https://jsonplacccceholder.typicode.com/todos/1', () => {
    return HttpResponse.json({
      // completed: false,
      // id: 1,
      // title: 'delectus aut autem',
      // userId: 1
      aaa: 'bbb'
    });
  }),

  http.head('https://jsonplaceholder.typicode.com/todos/1', () => {
    return new Response('succes', {
      status: 200,
      headers: {
        'Content-type': 'application/json',
        'other-ifos': 'value',
      },
    })
  })
];

  