/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import ImgDriver from './Img.driver';

describe('Img', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ImgDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });

  it('should render correctly with alt and src', () => {
    expect(driver.when.created({ src: '123', alt: '222' }).get.src()).toBe('123');
    expect(driver.get.alt()).toBe('222');
  });
});
