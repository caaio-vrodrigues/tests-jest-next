import '@testing-library/jest-dom';
import { mswServer } from './mswServer';
import fetchAPI from '@/funcs/fetchAPI';

describe('fetchAPI function', () => {
  it('Should fetch and return id value 1', async () => {
    const resp = await fetchAPI();
    const data = await resp;
    expect(data).toBe(1);
  });
});