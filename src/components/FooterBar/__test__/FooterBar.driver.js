import { mount } from 'enzyme';
import FooterBar from './../index';

export default class FooterBarDriver {
  when = {
    created: (props) => {
      this.component = mount(<FooterBar
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="footerBar"]').length,
  }
}
