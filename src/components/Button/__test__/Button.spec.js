/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import { spy } from 'sinon';
import ButtonDriver from './Button.driver';

describe('Button', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ButtonDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });

  it('should trigger callback onCLick', () => {
    const onClick = spy();

    driver.when.created({ onClick }).when.clicked();
    expect(onClick.calledOnce).toBeTruthy();
  });
});
