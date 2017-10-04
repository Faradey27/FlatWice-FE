/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import LogInModalDriver from './LogInModal.driver';

describe('LogInModal', () => {
  let driver = null;

  beforeEach(() => {
    driver = new LogInModalDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
