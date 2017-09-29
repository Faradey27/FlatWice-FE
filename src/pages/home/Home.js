import { Component } from 'react';
import { array, object } from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { loadTranslations, init, l } from './../../i18n';
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
          <div className="layer">
            <div className="title">
              {l('Recommended flats for you')}
            </div>
          </div>
          <CardsLayer
            cards={this.props.flats}
          />
          <FlatMap />
        </div>
        <style jsx>
          {`
            .homePage {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              width: 100%;
            }
            .title {
              width: 100%;
              font-size: 48px;
              padding-bottom: 30px;
              padding: 0 60px;
              max-width: 1246px;
              padding-bottom: 30px;
            }
            .layer {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              width: 100%;
            }
          `}
        </style>
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
