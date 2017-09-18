import { Component } from 'react';
import withRedux from 'next-redux-wrapper';
import { object } from 'prop-types';
import { loadTranslations, init } from './../../i18n';
import createStore from './../../data/redux/create';

import MainLayout from './../../layouts/MainLayout';

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
      <MainLayout>
        <div />
      </MainLayout>
    );
  }
}

export default withRedux(createStore, null, null)(FlatDetails);
