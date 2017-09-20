/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import FooterBarDriver from './FooterBar.driver';

describe('FooterBar', () => {
  let driver = null;

  beforeEach(() => {
    driver = new FooterBarDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
