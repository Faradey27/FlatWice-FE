/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import GoogleMapDriver from './GoogleMap.driver';

describe('GoogleMap', () => {
  let driver = null;

  beforeEach(() => {
    driver = new GoogleMapDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });
});
