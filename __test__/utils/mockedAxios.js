const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { HOST, FLATS_ENDPOINT } = require('./../../src/constants/data');

const mock = new MockAdapter(axios);

export const mockLocales = () => {
  mock.onGet(`${HOST}/assets/locales/en.json`).reply(200, {
    data: require('./../../src/assets/locales/en.json'),
  });
};

export const mockFlats = () => {
  mock.onGet(`${HOST}${FLATS_ENDPOINT}`).reply(200, require('./../../src/mocks/flatsList.json'));
};

export default mock;
