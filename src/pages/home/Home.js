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

const WIDGETS_VIEW_ID = 'WIDGETS';

class Home extends Component {
  static propTypes = {
    localeData: object, // from async request in getInitialProps
    widgets: array,
  }

  static async getInitialProps({ store }) {
    store.dispatch(loadEntities({ viewId: WIDGETS_VIEW_ID }));
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
        <CardsLayer />
        {
          this.props.widgets.map((widget) => (
            <div
              data-hook="home-widget"
              key={widget.id}
            >
              {widget.id}
            </div>
          ))
        }
        <FooterBar />
      </div>
    );
  }
}

export default withRedux(
  createStore,
  (state) => ({
    widgets: selectEntitiesByViewId(state, WIDGETS_VIEW_ID),
  }),
  { loadEntities }
)(Home);
