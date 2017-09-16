/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import CardsLayerDriver from './CardsLayer.driver';

describe('CardsLayer', () => {
  let driver = null;

  beforeEach(() => {
    driver = new CardsLayerDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
