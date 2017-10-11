import { Component } from 'react';
import { l } from './../../../../i18n';

import Button from './../../../Button';
import Input from './../../../Input';
import SearcIcon from './../../../../assets/icons/SearchIcon';
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
          <Button accent>{l('Search')}</Button>
        </div>
        <style jsx>{styles}</style>
      </form>
    );
  }
}

export default SearchForm;
