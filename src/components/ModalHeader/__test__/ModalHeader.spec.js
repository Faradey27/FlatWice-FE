/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import ModalHeaderDriver from './ModalHeader.driver';

describe('ModalHeader', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ModalHeaderDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
