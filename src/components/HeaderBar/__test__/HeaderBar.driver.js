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
  };

  is = {
    ok: () => this.component.find('[data-testid="headerBar"]').length,
  }
}
