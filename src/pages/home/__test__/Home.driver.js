import { mount } from 'enzyme';
import { getStore } from './../../../../__test__/utils/mockedStore';
import Home from './../../index';
import { mockLocales } from './../../../../__test__/utils/mockedAxios';

const localeData = {
  en: require('./../../../assets/locales/en.json'),
};

export default class AboutDriver {
  constructor() {
    mockLocales();
  }

  when = {
    created: (props) => {
      this.component = mount(<Home
        localeData={localeData}
        {...props}
      />);

      return this;
    },

    doServerDataLoad: () => {
      Home.getInitialProps({ isServer: true, store: getStore() });
    },
  };

  is = {
    ok: () => Boolean(typeof this.component === 'object' && Object.keys(this.component).length > 0),
    headerRendered: () => this.component.find('[data-hook="headerBar"]'),
    footerRendered: () => this.component.find('[data-hook="footerBar"]'),
  }

  get = {
    initialProps: () => Home.getInitialProps(),
    numberOfWidgets: () => this.component.find('[data-hook="home-widget"]').length,
  }
}
