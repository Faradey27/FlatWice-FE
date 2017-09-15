/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import LogoDriver from './Logo.driver';

describe('Logo', () => {
  let driver = null;

  beforeEach(() => {
    driver = new LogoDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });

  it('should have correct text', () => {
    expect(driver.when.created().get.text()).toBe('FlatWice');
  });
});
