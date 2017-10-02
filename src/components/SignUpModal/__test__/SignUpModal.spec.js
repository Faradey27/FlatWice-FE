/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import SignUpModalDriver from './SignUpModal.driver';

describe('SignUpModal', () => {
  let driver = null;

  beforeEach(() => {
    driver = new SignUpModalDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
