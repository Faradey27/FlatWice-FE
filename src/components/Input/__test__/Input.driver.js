import { mount } from 'enzyme';
import Input from './../index';

export default class InputDriver {
  when = {
    created: (props) => {
      this.component = mount(<Input
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="input"]').length,
  }
}
