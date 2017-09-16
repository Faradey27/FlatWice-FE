import { Component } from 'react';
import { array, object } from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { loadTranslations, init } from './../../i18n';
import createStore from './../../data/redux/create';
import { loadEntities, selectEntitiesByViewId } from './../../data/redux/modules/entities';

import HeaderBar from './../../components/HeaderBar';
import MainFiltersArea from './../../components/MainFiltersArea';
import CardsLayer from './../../components/CardsLayer';
import FooterBar from './../../components/FooterBar';
import FlatMap from './../../components/FlatMap';

const FLATS_VIEW_ID = 'FLATS';

class Home extends Component {
  static propTypes = {
    flats: array,
    localeData: object, // from async request in getInitialProps
  }

  static async getInitialProps({ store }) {
    store.dispatch(loadEntities({ viewId: FLATS_VIEW_ID }));
    const localeData = await loadTranslations();

    return { localeData };
  }

  constructor(props) {
    super(props);

    this.l = init({ localeData: props.localeData });
  }

  render() {
    return (
      <div data-testid="homePage">
        <HeaderBar/>
        <MainFiltersArea />
        <CardsLayer
          cards={this.props.flats}
        />
        <FlatMap />
        <FooterBar />
      </div>
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
