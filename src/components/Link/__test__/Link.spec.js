/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
// import { spy } from 'sinon';
import LinkDriver from './Link.driver';

describe('Link', () => {
  let driver = null;

  beforeEach(() => {
    driver = new LinkDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
