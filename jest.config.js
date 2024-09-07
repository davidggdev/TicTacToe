module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    globals: {
      'ts-jest': {
        isolatedModules: true
      }
    },
    moduleDirectories: ['node_modules', 'src'],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    }
  };
  