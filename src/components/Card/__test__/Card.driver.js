import { mount } from 'enzyme';
import Card from './../index';

export default class CardDriver {
  when = {
    created: (props) => {
      this.component = mount(<Card
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="card"]').length,
  }
}
