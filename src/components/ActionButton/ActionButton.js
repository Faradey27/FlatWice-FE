import { Component } from 'react';
import { func, element, number, string, oneOfType } from 'prop-types';
import styles from './ActionButtonStyles';

class ActionButton extends Component {
  static propTypes = {
    children: oneOfType([element, string]),
    dataTestId: string,
    marginLeft: number,
    theme: string,
    onClick: func,
  }

  render() {
    return (
      <button
        className={`action-button ${this.props.theme}`}
        data-testid={this.props.dataTestId || 'actionButton'}
        style={{ marginLeft: this.props.marginLeft }}
        onClick={this.props.onClick}
      >
        {this.props.children}
        <style jsx>{styles}</style>
      </button>
    );
  }
}

export default ActionButton;
