import { Component } from 'react';
import { array, object } from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { loadTranslations, init } from './../../i18n';
import createStore from './../../data/redux/create';
import { loadEntities, selectEntitiesByViewId } from './../../data/redux/modules/entities';

import MainLayout from './../../layouts/MainLayout';
import MainFiltersArea from './../../components/MainFiltersArea';
import CardsLayer from './../../components/CardsLayer';
import FlatMap from './../../components/FlatMap';

import { FLATS_VIEW_ID, FLATS_ENDPOINT } from './../../constants/data';

class Home extends Component {
  static propTypes = {
    flats: array,
    localeData: object, // from async request in getInitialProps
  }

  static async getInitialProps({ store }) {
    store.dispatch(loadEntities({ viewId: FLATS_VIEW_ID, endpoint: FLATS_ENDPOINT }));
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
        <div data-testid="homePage">
          <MainFiltersArea />
          <CardsLayer
            cards={this.props.flats}
          />
          <FlatMap />
        </div>
      </MainLayout>
    );
  }
}

export default withRedux(
  createStore,
  (state) => ({
    flats: selectEntitiesByViewId(state, FLATS_VIEW_ID),
  }),
  { loadEntities }
)(Home);
