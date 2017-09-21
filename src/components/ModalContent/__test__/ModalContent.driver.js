import { mount } from 'enzyme';
import ModalContent from './../index';

export default class ModalContentDriver {
  when = {
    created: (props) => {
      this.component = mount(<ModalContent
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="modalContent"]').length,
  }
}
