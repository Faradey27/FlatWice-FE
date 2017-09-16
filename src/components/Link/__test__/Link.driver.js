import { mount } from 'enzyme';
import Link from './../index';

export default class LinkDriver {
  when = {
    created: (props) => {
      this.component = mount(<Link
        {...props}
      >
        {'Text'}
      </Link>);

      return this;
    },
  };

  is = {
    ok: () => this.component.text() === 'Text',
  }
}
