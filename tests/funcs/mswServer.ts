import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

const mswServer = setupServer(...handlers);

export { mswServer };