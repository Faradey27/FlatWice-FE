import { PureComponent } from 'react';
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

import styles from './HomeStyles';

class Home extends PureComponent {
  static propTypes = {
    flats: array,
    localeData: object, // from async request in getInitialProps
  }

  static async getInitialProps({ store }) {
    store.dispatch(loadEntities({ from: 0, to: 5, viewId: FLATS_VIEW_ID, endpoint: FLATS_ENDPOINT }));
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
        <div
          className="homePage"
          data-testid="homePage"
        >
          <div className="layer">
            <MainFiltersArea />
          </div>
          <div className="home-card-flats">
            <CardsLayer
              cards={this.props.flats}
            />
            <FlatMap />
          </div>
        </div>
        <style jsx>{styles}</style>
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
