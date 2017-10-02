import { mount } from 'enzyme';
import ActionButton from './../index';

export default class ActionButtonDriver {
  when = {
    created: (props) => {
      this.component = mount(<ActionButton
        {...props}
      />);

      return this;
    },

    clicked: () => {
      this.component.simulate('click');
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="actionButton"]').length,
  }
}
