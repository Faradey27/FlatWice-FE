/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import { spy } from 'sinon';
import ModalDriver from './Modal.driver';

describe('Modal', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ModalDriver();
  });

  it('should render correctly and not be opened', () => {
    expect(driver.when.created().is.opened()).toBeFalsy();
  });

  it('should render correctly and be opened', () => {
    expect(driver.when.created({ isOpen: true }).is.opened()).toBeTruthy();
    expect(driver.is.ok()).toBeTruthy();
  });

  it('should close modal after click on overlay', () => {
    const onRequestClose = spy();

    expect(onRequestClose.notCalled).toBeTruthy();
    expect(driver.when.created({ isOpen: true, onRequestClose }).is.opened()).toBeTruthy();
    driver.when.clickedOnOverlay();
    expect(onRequestClose.calledOnce).toBeTruthy();
  });

  it('should close modal after escape press', () => {
    const onRequestClose = spy();

    expect(onRequestClose.notCalled).toBeTruthy();
    expect(driver.when.created({ isOpen: true, onRequestClose }).is.opened()).toBeTruthy();
    driver.when.escapePressed();
    expect(onRequestClose.calledOnce).toBeTruthy();
    driver.when.unmount();
  });

  it('should do nothing after click on overlay if no callback', () => {
    expect(driver.when.created({ isOpen: true }).is.opened()).toBeTruthy();
    driver.when.clickedOnOverlay();
  });
  it('should do nothing after click on overlay if no callback', () => {
    expect(driver.when.created({ isOpen: true }).is.opened()).toBeTruthy();
    driver.when.escapePressed();
  });
});
