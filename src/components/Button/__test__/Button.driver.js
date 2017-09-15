import { mount } from 'enzyme';
import Button from './../index';

export default class ButtonDriver {
  when = {
    created: (props) => {
      this.component = mount(<Button
        {...props}
      />);

      return this;
    },

    clicked: () => {
      this.component.simulate('click');
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="button"]').length,
  }
}
