import { mount } from 'enzyme';
import mockedRouter from '../../../../__test__/utils/mockedRouter';
import HeaderBar from './../index';

export default class HeaderBarDriver {
  when = {
    created: (props) => {
      const router = mockedRouter.instance();

      this.component = mount(
        <HeaderBar
          {...props}
        />,
        { context: { router } }
      );

      router.setComponent(this.component);

      return this;
    },
    clickSignUp: () => {
      this.component.find('[data-testid="signUp"]').simulate('click');

      return this;
    },
    clickLogIn: () => {
      this.component.find('[data-testid="logIn"]').simulate('click');

      return this;
    },
    clickOnOverlay: () => {
      this.component.find('[data-testid="overlay"]').simulate('click');

      return this;
    },
    clickOnCloseIcon: () => {
      this.component.find('[data-testid="modalHeaderCloseIcon"]').simulate('click');

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="headerBar"]').length,
    signUpModalOpened: () => this.component.find('[data-testid="signUpModal"]').length,
    logInModalOpened: () => this.component.find('[data-testid="logInModal"]').length,
  }
}
