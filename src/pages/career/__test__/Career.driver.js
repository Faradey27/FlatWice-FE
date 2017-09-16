import { mount } from 'enzyme';
import Career from './../index';
import { mockLocales } from './../../../../__test__/utils/mockedAxios';

const localeData = {
  en: require('./../../../assets/locales/en.json'),
};

export default class CareerDriver {
  constructor() {
    mockLocales();
  }

  when = {
    created: (props) => {
      this.component = mount(<Career
        localeData={localeData}
        {...props}
      />);

      return this;
    },
  };

  get = {
    initialProps: () => Career.getInitialProps(),
  }

  is = {
    ok: () => Boolean(typeof this.component === 'object' && Object.keys(this.component).length > 0),
    headerRendered: () => this.component.find('[data-hook="headerBar"]'),
    footerRendered: () => this.component.find('[data-hook="footerBar"]'),
  }
}
