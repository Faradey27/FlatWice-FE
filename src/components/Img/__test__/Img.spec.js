/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */

import ImgDriver from './Img.driver';

const PLACEHOLDER = `
  data:image/png;base64,
  iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnUlEQVR42u3RAQkAAAgDMN8frKw1RLYKS3VPcUaEC
  EGIEIQIQYgQhAgRIgQhQhAiBCFCECIEIQgRghAhCBGCECEIQYgQhAhBiBCECEEIQoQgRAhChCBECEIQIgQhQhAiBCF
  CEIIQIQgRghAhCBGCEIQIQYgQhAhBiBCEIEQIQoQgRAhChCAEIUIQIgQhQhAiBCFChAhBiBCECEHIdwuwddLxdxELtAAAAABJRU5ErkJggg==
`;

describe('Img', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ImgDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });

  it('should render correctly with alt and src', () => {
    expect(driver.when.created({ src: '123', alt: '222' }).get.src()).toBe(PLACEHOLDER);
    expect(driver.get.alt()).toBe('222');
  });
});
