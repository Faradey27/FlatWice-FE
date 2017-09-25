const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { HOST, FLATS_ENDPOINT } = require('./../../src/constants/data');

const mock = new MockAdapter(axios);
const DEFAULT_NUM_OF_FLATS = 5;

export const mockLocales = () => {
  mock.onGet(`${HOST}/assets/locales/en.json`).reply(200, {
    data: require('./../../src/assets/locales/en.json'),
  });
  mock.onGet(`${HOST}/assets/locales/ru.json`).reply(200, {
    data: require('./../../src/assets/locales/ru.json'),
  });
};

export const mockFlats = (numOfFLats = DEFAULT_NUM_OF_FLATS) => {
  const generator = require('./../../src/mocks/flatListGenerator.js');
  const flats = generator.generate(numOfFLats);

  mock.onGet(`${HOST}${FLATS_ENDPOINT}?from=0&to=5`).reply(200, flats);

  return flats;
};

export default mock;
