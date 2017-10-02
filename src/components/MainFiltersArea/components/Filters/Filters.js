import { Component } from 'react';
import { l } from './../../../../i18n';

import Button from './../../../Button';
import ArrowDown from './../../../../assets/icons/ArrowDown.svg';
import styles from './FiltersStyles';

const getArrowIcon = () => (
  <div className="arrow">
    {<ArrowDown />}
    <style jsx>
      {`
        .arrow {
          position: relative;
          display: inline-block;
          margin-left: 6px;
          top: 1px;
        }
      `}
    </style>
  </div>
);

class SearchForm extends Component {
  render() {
    return (
      <form className="filters-form">
        <Button
          marginLeft={-15}
          secondary
        >
          {l('Price')}
          {getArrowIcon()}
        </Button>
        <Button
          marginLeft={10}
          secondary
        >
          {l('Number of rooms')}
          {getArrowIcon()}
        </Button>
        <Button
          marginLeft={10}
          secondary
        >
          {l('Localtion')}
          {getArrowIcon()}
        </Button>
        <Button
          marginLeft={10}
          secondary
        >
          {l('Choose location on map')}
          {getArrowIcon()}
        </Button>
        <Button
          marginLeft={10}
          secondary
        >
          {l('More filters')}
          {getArrowIcon()}
        </Button>
        <style jsx>{styles}</style>
      </form>
    );
  }
}

export default SearchForm;
