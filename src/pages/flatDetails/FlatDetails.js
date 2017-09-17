import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { object } from 'prop-types';
import { loadTranslations, init } from './../../i18n';
import createStore from './../../data/redux/create';

import resetStyles from './../../assets/resetStyles';

import HeaderBar from './../../components/HeaderBar';
import FooterBar from './../../components/FooterBar';

class FlatDetails extends Component {
  static propTypes = {
    localeData: object, // from async request in getInitialProps
  }

  static async getInitialProps() {
    const localeData = await loadTranslations();

    return { localeData };
  }

  constructor(props) {
    super(props);

    this.l = init({ localeData: props.localeData });
  }

  render() {
    return (
      <div>
        <HeaderBar/>
        <FooterBar/>
        {resetStyles}
      </div>
    );
  }
}

export default withRedux(createStore, null, null)(FlatDetails);
