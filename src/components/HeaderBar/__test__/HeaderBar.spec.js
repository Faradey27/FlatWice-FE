/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
// import { spy } from 'sinon';
import HeaderBarDriver from './HeaderBar.driver';

describe('HeaderBar', () => {
  let driver = null;

  beforeEach(() => {
    driver = new HeaderBarDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
