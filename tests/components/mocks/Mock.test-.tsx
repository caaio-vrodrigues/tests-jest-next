import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/todos/1', () => {
    return HttpResponse.json([
      {
        title: 'delectus aut autem',
        test: 'Mocked',
      },
    ]);
  })
);

server.listen();

describe('My first mock', () => {
  it('Should fetch a mock', () => {
    expect(1).toBe(1);
  })
});