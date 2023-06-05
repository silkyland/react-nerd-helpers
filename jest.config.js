module.exports = {
  // The root directory that Jest should scan for tests and modules within
  rootDir: './',
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // The test runner that Jest should use
  testRunner: 'jest-circus/runner',
  // The file extensions that Jest should look for when running tests
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ['./jest.setup.js'],
  // The paths to modules that Jest should use to transform code before running tests
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
}
