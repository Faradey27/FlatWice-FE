import { Component } from 'react';
import { l } from './../../../../i18n';

import ActionButton from './../../../ActionButton';
import Input from './../../../Input';
import SearcIcon from './../../../../assets/icons/Search.svg';
import styles from './SearchFormStyles';

class SearchForm extends Component {
  render() {
    return (
      <form className="form">
        <label
          className="search"
          htmlFor="search-input"
        >
          <div className="search-icon">
            <SearcIcon />
          </div>
          <Input
            focusOnMount
            name="search-input"
            placeholder={l('Search for flats...')}
            theme="search"
          />
        </label>
        <div className="action-button">
          <ActionButton theme="accent">{l('Search')}</ActionButton>
        </div>
        <style jsx>{styles}</style>
      </form>
    );
  }
}

export default SearchForm;
