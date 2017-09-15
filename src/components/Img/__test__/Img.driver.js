import { mount } from 'enzyme';
import Img from './../index';

export default class ImgDriver {
  when = {
    created: (props) => {
      this.component = mount(<Img
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="image"]').length,
  }

  get = {
    alt: () => this.component.find('img').prop('alt'),
    src: () => this.component.find('img').prop('src'),
  }
}
