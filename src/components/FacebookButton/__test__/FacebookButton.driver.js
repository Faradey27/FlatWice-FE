import { mount } from 'enzyme';
import FacebookButton from './../index';

export default class FacebookButtonDriver {
  when = {
    created: (props) => {
      this.component = mount(<FacebookButton
        {...props}
      />);

      return this;
    },

    clicked: () => {
      this.component.simulate('click');
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="facebookButton"]').length,
  }
}
