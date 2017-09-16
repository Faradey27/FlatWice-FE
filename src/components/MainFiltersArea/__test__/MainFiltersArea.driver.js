import { mount } from 'enzyme';
import MainFiltersArea from './../index';

export default class MainFiltersAreaDriver {
  when = {
    created: (props) => {
      this.component = mount(<MainFiltersArea
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="mainFiltersArea"]').length,
  }
}
