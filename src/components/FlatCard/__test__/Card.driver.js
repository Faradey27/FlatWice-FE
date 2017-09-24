import { mount } from 'enzyme';
import FlatCard from './../index';

export default class FlatCardDriver {
  when = {
    created: (props) => {
      this.component = mount(<FlatCard
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="flat-card"]').length,
  }
}
