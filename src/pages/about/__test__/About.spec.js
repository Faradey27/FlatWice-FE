/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import AboutDriver from './About.driver';

describe('About Page', () => {
  let driver = null;

  beforeEach(() => {
    driver = new AboutDriver();
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

  it('About page: getInitialProps should return localeData', async () => {
    expect((await driver.get.initialProps()).initialProps.localeData.data.locale_data.messages['Home Page']).toEqual(['']);
  });
});
