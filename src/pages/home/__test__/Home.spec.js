/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import HomeDriver from './Home.driver';

describe('Home Page', () => {
  let driver = null;

  beforeEach(() => {
    driver = new HomeDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });

  it('should render with header', () => {
    expect(driver.when.created().is.headerRendered()).toBeTruthy();
  });

  it('should render with footer', () => {
    expect(driver.when.created().is.footerRendered()).toBeTruthy();
  });

  it('getInitialProps should return localeData', async () => {
    expect((await driver.get.initialProps()).initialProps.localeData.data.locale_data.messages['Home Page']).toEqual(['']);
  });

  it('should render flats with data from server(nextjs)', (done) => {
    const EXPECTED_NUMBER_OF_FLATS = 2;

    driver.when.created().when.doServerDataLoad();
    setTimeout(() => {
      expect(driver.get.numberOfFlats()).toBe(EXPECTED_NUMBER_OF_FLATS);
      done();
    });
  });
});
