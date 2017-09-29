import { Component } from 'react';
import { func, element, string, oneOfType } from 'prop-types';

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

            .accent {
              background-color: var(--primaryColor);
              box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08);
            }

            .accent:hover {
              background-color: color(var(--primaryColor) alpha(-15%)) !important;
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
