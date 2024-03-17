import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { mswServer } from './tests/funcs/mswServer.ts'

beforeAll(() => mswServer.listen({ 
  onUnhandledRequest: "bypass" 
}));

afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());