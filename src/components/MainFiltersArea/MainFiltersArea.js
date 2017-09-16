import { Component } from 'react';
import { l } from './../../i18n';

import Button from './../Button';
import Input from './../Input';

class MainFiltersArea extends Component {
  render() {
    return (
      <div data-testid="mainFiltersArea">
        <Input />
        <Button>{l('Search')}</Button>
      </div>
    );
  }
}

export default MainFiltersArea;
