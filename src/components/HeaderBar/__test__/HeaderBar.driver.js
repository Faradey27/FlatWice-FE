import { mount } from 'enzyme';
import HeaderBar from './../index';

export default class HeaderBarDriver {
  when = {
    created: (props) => {
      this.component = mount(<HeaderBar
        {...props}
      />);

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
  };

  is = {
    ok: () => this.component.find('[data-testid="headerBar"]').length,
    signUpModalOpened: () => this.component.find('[data-testid="signUpModal"]').length,
    logInModalOpened: () => this.component.find('[data-testid="logInModal"]').length,
  }
}
