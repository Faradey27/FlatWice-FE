import { Component } from 'react';
import { func, element, oneOfType, string } from 'prop-types';

class Button extends Component {
  static propTypes = {
    children: oneOfType([element, string]),
    onClick: func,
  }

  render() {
    return (
      <button
        data-testid="button"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
