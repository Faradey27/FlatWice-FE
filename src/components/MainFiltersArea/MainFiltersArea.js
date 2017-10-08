import { Component } from 'react';

import SearchForm from './components/SearchForm';
import styles from './MainFiltersAreaStyles';

class MainFiltersArea extends Component {
  render() {
    return (
      <div
        className="mainFiltersArea"
        data-testid="mainFiltersArea"
      >
        <div className="search-area">
          <SearchForm />
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default MainFiltersArea;
