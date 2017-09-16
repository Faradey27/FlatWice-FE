import { mount } from 'enzyme';
import FlatMap from './../index';

export default class FlatMapDriver {
  when = {
    created: (props) => {
      this.component = mount(<FlatMap
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="flatMap"]').length,
  }
}
