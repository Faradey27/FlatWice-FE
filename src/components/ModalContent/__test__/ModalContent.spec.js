/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import ModalContentDriver from './ModalContent.driver';

describe('ModalContent', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ModalContentDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
