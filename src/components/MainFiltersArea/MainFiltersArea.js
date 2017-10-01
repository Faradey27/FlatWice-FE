import { Component } from 'react';
import { l } from './../../i18n';

import SearchForm from './components/SearchForm';
import Filters from './components/Filters';
import styles from './MainFiltersAreaStyles';

class MainFiltersArea extends Component {
  render() {
    return (
      <div
        className="mainFiltersArea"
        data-testid="mainFiltersArea"
      >
        <div className="title">
          {l('We will help to find the best flat for you. Just start to type.')}
        </div>
        <div className="search-area">
          <SearchForm />
          <Filters />
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default MainFiltersArea;
