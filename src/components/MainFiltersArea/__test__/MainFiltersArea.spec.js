/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import MainFiltersAreaDriver from './MainFiltersArea.driver';

describe('MainFiltersArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MainFiltersAreaDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
