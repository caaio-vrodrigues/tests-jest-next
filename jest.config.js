const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // moduleNameMapper: {
  //   '^@/components/(.*)$': '<rootDir>/components/$1',
  //   '^@/app/(.*)$': '<rootDir>/app/$1',
  // },
};

module.exports = createJestConfig(customJestConfig);
