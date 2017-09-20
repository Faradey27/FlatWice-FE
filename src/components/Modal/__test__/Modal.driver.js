import { mount } from 'enzyme';
import Modal from './../index';

export default class ModalDriver {
  when = {
    created: (props) => {
      this.component = mount(<Modal
        {...props}
      />);

      return this;
    },
    clickedOnOverlay: () => {
      this.component.find('[data-testid="overlay"]').simulate('click');

      return this;
    },
    escapePressed: () => {
      this.component.instance().handleKeyUp({ key: 'Escape' });

      return this;
    },
    unmount: () => {
      this.component.unmount();

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="modal"]').length,
    opened: () => this.component.find('[data-testid="modal"]').length,
  }
}
