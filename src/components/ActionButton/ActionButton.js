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
        className="action-button"
        data-testid="actionButton"
        onClick={this.props.onClick}
      >
        {this.props.children}
        <style jsx>
          {`
            @import "theme.css";
            .action-button {
              position: relative;
              cursor: pointer;
              font-size: 14px;
              padding: 8px 15px;
              background-color: var(--secondaryColor);
              color: var(--white);
              border: none;
              border-radius: 4px;
            }

            .action-button:hover {
              background-color: color(var(--secondaryColor) alpha(-15%));
            }
          `}
        </style>
      </button>
    );
  }
}

export default ActionButton;
