import { mount } from 'enzyme';
import LogInModal from './../index';

export default class LogInModalDriver {
  when = {
    created: (props) => {
      this.component = mount(<LogInModal
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="logInModal"]').length,
  }
}
