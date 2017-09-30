import { Component } from 'react';
import { func, element, string, oneOfType } from 'prop-types';
import styles from './ActionButtonStyles';

class ActionButton extends Component {
  static propTypes = {
    children: oneOfType([element, string]),
    dataTestId: string,
    theme: string,
    onClick: func,
  }

  render() {
    return (
      <button
        className={`action-button ${this.props.theme}`}
        data-testid={this.props.dataTestId || 'actionButton'}
        onClick={this.props.onClick}
      >
        {this.props.children}
        <style jsx>{styles}</style>
      </button>
    );
  }
}

export default ActionButton;
