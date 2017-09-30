import { Component } from 'react';
import { l } from './../../i18n';

import ActionButton from './../ActionButton';
import Input from './../Input';
import SearcIcon from './imgs/Search.svg';
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
          <form className="form">
            <label
              className="search"
              htmlFor="search-input"
            >
              <div className="search-icon">
                <SearcIcon />
              </div>
              <Input
                name="search-input"
                placeholder={l('Search for flats...')}
                theme="search"
              />
            </label>
            <label
              className="price"
              htmlFor="price-input"
            >
              <Input
                name="price-input"
                placeholder={l('Price...')}
                theme="price"
              />
            </label>
            <label
              className="price rooms"
              htmlFor="rooms-input"
            >
              <Input
                name="rooms-input"
                placeholder={l('Rooms...')}
                theme="rooms"
              />
            </label>
            <label
              className="price rooms"
              htmlFor="rooms-input"
            >
              <Input
                name="rooms-input"
                placeholder={l('Map...')}
                theme="rooms"
              />
            </label>
            <label
              className="price rooms"
              htmlFor="rooms-input"
            >
              <Input
                name="rooms-input"
                placeholder={l('More...')}
                theme="rooms"
              />
            </label>
            <div className="action-button">
              <ActionButton theme="accent">{l('Search')}</ActionButton>
            </div>
          </form>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default MainFiltersArea;
