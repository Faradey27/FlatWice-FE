import { mount } from 'enzyme';
import GoogleButton from './../index';

export default class GoogleButtonDriver {
  when = {
    created: (props) => {
      this.component = mount(<GoogleButton
        {...props}
      />);

      return this;
    },

    clicked: () => {
      this.component.simulate('click');
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="googleButton"]').length,
  }
}
