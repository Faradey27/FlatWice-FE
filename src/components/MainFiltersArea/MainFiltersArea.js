import { Component } from 'react';
import { l } from './../../i18n';

import ActionButton from './../ActionButton';
import Input from './../Input';
import SearcIcon from './imgs/Search.svg';

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
        <style jsx>
          {`
            .action-button {
              display: flex;
              margin-left: 20px;
            }
            .mainFiltersArea {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              padding: 30px 60px;
              width: 100%;
              max-width: calc(1366px - 120px);
            }
            .title {
              font-size: 48px;
              max-width: 700px;
              padding-bottom: 30px;
            }
            .form {
              width: 100%;
              display: flex;
            }
            .search-icon {
              display: flex;
              align-items: center;
              padding: 0 10px;
            }
            .search {
              display: flex;
              align-items: center;
              font-size: 19px;
              min-width: 400px;
              color: #484848;
              border-radius: 4px;
              border: 1px solid #DBDBDB;
              box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08);
              padding: 0px;
              height: 60px;
              width: 100%;
              position: relative;
            }
            .price {
              position: relative;
              display: flex;
              align-items: center;
              font-size: 19px;
              color: #484848;
              border-radius: 4px;
              border: 1px solid #DBDBDB;
              box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08);
              padding: 0px;
              height: 60px;
              width: 110px;
              position: relative;
              margin-left: 20px;
            }
            .rooms {
              width: 130px;
            }
            .search-area {
              display: flex;
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MainFiltersArea;
