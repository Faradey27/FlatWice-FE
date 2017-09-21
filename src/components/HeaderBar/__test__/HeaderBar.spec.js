/* eslint-disable fp/no-mutation */
/* eslint-disable fp/no-let */
import HeaderBarDriver from './HeaderBar.driver';

describe('HeaderBar', () => {
  let driver = null;

  beforeEach(() => {
    driver = new HeaderBarDriver();
  });

  it('should render correctly', () => {
    expect(driver.when.created().is.ok()).toBeTruthy();
  });

  it('should open signIn modal on signIn button click', () => {
    expect(driver.when.created().when.clickSignUp().is.signUpModalOpened()).toBeTruthy();
  });

  it('should open logIn modal on logIn button click', () => {
    expect(driver.when.created().when.clickLogIn().is.logInModalOpened()).toBeTruthy();
  });

  it('should open logIn modal on logIn button and close it on overlay click', () => {
    expect(driver.when.created().when.clickLogIn().is.logInModalOpened()).toBeTruthy();
    expect(driver.when.clickOnOverlay().is.logInModalOpened()).toBeFalsy();
  });

  it('should open logIn modal on logIn button and close it on close icon click', () => {
    expect(driver.when.created().when.clickLogIn().is.logInModalOpened()).toBeTruthy();
    expect(driver.when.clickOnCloseIcon().is.logInModalOpened()).toBeFalsy();
  });
});
