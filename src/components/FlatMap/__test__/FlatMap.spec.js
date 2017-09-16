/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
// import { spy } from 'sinon';
import FlatMapDriver from './FlatMap.driver';

describe('FlatMap', () => {
  let driver = null;

  beforeEach(() => {
    driver = new FlatMapDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
