/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import FlatDetailsDriver from './FlatDetails.driver';

describe('FlatDetails Page', () => {
  let driver = null;

  beforeEach(() => {
    driver = new FlatDetailsDriver();
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

  it('FlatDetails: getInitialProps should return localeData', async () => {
    expect((await driver.get.initialProps()).initialProps.localeData.data.locale_data.messages['Home Page']).toEqual(['']);
  });
});
