import { mount } from 'enzyme';
import SignUpModal from './../index';

export default class SignUpModalDriver {
  when = {
    created: (props) => {
      this.component = mount(<SignUpModal
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="signUpModal"]').length,
  }
}
