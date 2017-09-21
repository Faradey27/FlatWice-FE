import { mount } from 'enzyme';
import ModalHeader from './../index';

export default class ModalHeaderDriver {
  when = {
    created: (props) => {
      this.component = mount(<ModalHeader
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="modalHeader"]').length,
  }
}
