import { mount } from 'enzyme';
import { object } from 'prop-types';
import Help from './../index';
import { mockLocales } from './../../../../__test__/utils/mockedAxios';
import mockedRouter from '../../../../__test__/utils/mockedRouter';

const localeData = {
  en: require('./../../../assets/locales/en.json'),
};

export default class HelpDriver {
  constructor() {
    mockLocales();
  }

  when = {
    created: (props) => {
      this.component = mount(<Help
        localeData={localeData}
        {...props}
      />, { context: { router: mockedRouter.instance() }, childContextTypes: { router: object } });

      return this;
    },
  };

  get = {
    initialProps: () => Help.getInitialProps(),
  }

  is = {
    ok: () => Boolean(typeof this.component === 'object' && Object.keys(this.component).length > 0),
    headerRendered: () => this.component.find('[data-hook="headerBar"]'),
    footerRendered: () => this.component.find('[data-hook="footerBar"]'),
  }
}
