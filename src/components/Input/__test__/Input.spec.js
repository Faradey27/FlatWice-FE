/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import InputDriver from './Input.driver';

describe('Input', () => {
  let driver = null;

  beforeEach(() => {
    driver = new InputDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
