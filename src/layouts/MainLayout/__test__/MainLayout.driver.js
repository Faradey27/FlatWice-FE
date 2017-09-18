import { mount } from 'enzyme';
import MainLayout from './../index';

export default class MainLayoutDriver {
  when = {
    created: (props) => {
      this.component = mount(<MainLayout
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="mainLayout"]').length,
  }
}
