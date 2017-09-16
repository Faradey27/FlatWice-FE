/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import CardDriver from './Card.driver';

describe('Card', () => {
  let driver = null;

  beforeEach(() => {
    driver = new CardDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
