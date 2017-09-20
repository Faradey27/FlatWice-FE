import { Component } from 'react';
import { bool, func, element, oneOfType, string } from 'prop-types';

class Button extends Component {
  static propTypes = {
    children: oneOfType([element, string]),
    dataTestId: string,
    withMarginRight: bool,
    onClick: func,
  }

  render() {
    const { dataTestId, withMarginRight } = this.props;

    return (
      <button
        className={`button ${withMarginRight ? 'marginRight' : ''}`}
        data-testid={dataTestId || 'button'}
        onClick={this.props.onClick}
      >
        {this.props.children}
        <style jsx>
          {`
            .button {
              position: relative;
              cursor: pointer;
              font-size: 14px;
              border: none;
              background: none;
              text-align: center;
              padding: 8px 0;
            }
            .button:hover:before {
              position: absolute;
              bottom: -4px;
              content: ' ';
              width: 100%;
              border-bottom: 2px solid #767676;
            }
            .marginRight {
              margin-right: 20px;
            }
          `}
        </style>
      </button>
    );
  }
}

export default Button;
