import { mount } from 'enzyme';
import Logo from './../index';

export default class LogoDriver {
  when = {
    created: (props) => {
      this.component = mount(<Logo
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="logo"]').length,
  }

  get = {
    text: () => this.component.text(),
  }
}
