import { Component } from 'react';
import { bool, func, element, oneOfType, string } from 'prop-types';
import styles from './ButtonStyles';

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
        <style jsx>{styles}</style>
      </button>
    );
  }
}

export default Button;
