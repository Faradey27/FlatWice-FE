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

  it('should render 2 cards', () => {
    const EXPECTED_NUMBER_OF_CARDS = 2;

    driver.when.created({ cards: [{ id: 1 }, { id: 2 }] });

    expect(driver.get.numberOfCards()).toBe(EXPECTED_NUMBER_OF_CARDS);
  });
});
