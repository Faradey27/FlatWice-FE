module.exports = (wallaby) => ({
  files: [
    'src/**/*.json',
    { pattern: '__test__/beforeTest.js', instrument: false },
    { pattern: 'src/**/*.spec.js', ignore: true },
    { pattern: 'src/.next/*.*', ignore: true },
    { pattern: 'src/next.config.js', ignore: true },
    { pattern: 'src/server.js', ignore: true },
    { pattern: 'src/routes.js', ignore: true },
    { pattern: 'src/mocks/flatListGenerator.js', instrument: false },
    'src/**/*.js*',
    '__test__/utils/mockedStore.js',
    '__test__/utils/mockedAxios.js',
    'src/**/*.png',
    'src/**/*.svg',
    'node_modules/bytesize-icons/dist/icons/*.svg',
    'src/**/*.css',
    'src/**/*.less',
  ],

  filesWithNoCoverageCalculated: [],

  hints: {
    ignoreCoverage: /istanbul ignore next/,
  },

  tests: [
    { pattern: 'node_modules/*', ignore: true, instrument: false },
    'src/**/*.spec.js*',
    'test/**/*.spec.js*',
  ],

  compilers: {
    '**/*.js': wallaby.compilers.babel(),
  },

  preprocessors: {
    '**/*.png': (file, done) => {
      done('');
    },
    '**/*.svg': (file, done) => {
      done('');
    },
  },


  setup: (target) => {
    const path = require('path');
    const jestConfig = require('./package.json').jest;

    target.testFramework.configure(Object.assign({}, jestConfig, {
      moduleNameMapper: {
        '^.+\\.(jpg|jpeg|png|gif|svg)$': path.resolve(__dirname, 'test/utils/fileMock.js'),
      },
    }));
  },

  env: {
    type: 'node',
  },

  workers: {
    initial: 1,
    regular: 1,
    recycle: true,
  },

  testFramework: 'jest',
});
