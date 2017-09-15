import { Component } from 'react';
import { func, element, string, oneOfType } from 'prop-types';

class ActionButton extends Component {
  static propTypes = {
    children: oneOfType([element, string]),
    onClick: func,
  }

  render() {
    return (
      <button
        data-testid="actionButton"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default ActionButton;
