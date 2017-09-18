/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import MainLayoutDriver from './MainLayout.driver';

describe('MainLayout', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MainLayoutDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
