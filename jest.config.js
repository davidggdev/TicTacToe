module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testMatch: ['**/__test__/**/*.test.(ts|tsx|js)'],
    globals: {
      'ts-jest': {
        isolatedModules: true
      }
    },
    moduleDirectories: ['node_modules', 'src'],
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
  };
  