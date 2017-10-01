import { Component } from 'react';
import { l } from './../../../../i18n';

import ActionButton from './../../../ActionButton';
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
        <ActionButton
          marginLeft={-15}
          theme="secondary"
        >
          {l('Price')}
          {getArrowIcon()}
        </ActionButton>
        <ActionButton
          marginLeft={10}
          theme="secondary"
        >
          {l('Number of rooms')}
          {getArrowIcon()}
        </ActionButton>
        <ActionButton
          marginLeft={10}
          theme="secondary"
        >
          {l('Localtion')}
          {getArrowIcon()}
        </ActionButton>
        <ActionButton
          marginLeft={10}
          theme="secondary"
        >
          {l('Choose location on map')}
          {getArrowIcon()}
        </ActionButton>
        <ActionButton
          marginLeft={10}
          theme="secondary"
        >
          {l('More filters')}
          {getArrowIcon()}
        </ActionButton>
        <style jsx>{styles}</style>
      </form>
    );
  }
}

export default SearchForm;
