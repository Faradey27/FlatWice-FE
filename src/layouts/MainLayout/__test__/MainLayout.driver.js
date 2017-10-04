import { mount } from 'enzyme';
import { object } from 'prop-types';
import mockedRouter from '../../../../__test__/utils/mockedRouter';
import MainLayout from './../index';

export default class MainLayoutDriver {
  when = {
    created: (props) => {
      this.component = mount(<MainLayout
        {...props}
      />, { context: { router: mockedRouter.instance() }, childContextTypes: { router: object } });

      return this;
    },
  };

  is = {
    ok: () => this.component.find('[data-testid="mainLayout"]').length,
  }
}
