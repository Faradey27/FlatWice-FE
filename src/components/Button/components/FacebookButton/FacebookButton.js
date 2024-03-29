import { Component } from 'react';
import { func, element, string, oneOfType, node } from 'prop-types';
import FacebookIcon from './../../../../assets/icons/FacebookIcon';
import styles from './FacebookButtonStyles';

class FacebookButton extends Component {
  static propTypes = {
    children: oneOfType([element, string, node]),
    theme: string,
    onClick: func,
  }

  render() {
    return (
      <button
        className={`facebook-button ${this.props.theme}`}
        data-testid="facebookButton"
        onClick={this.props.onClick}
      >
        <span id="2">
          <FacebookIcon />
          <span className="children">{this.props.children}</span>
        </span>
        <style jsx>{styles}</style>
      </button>
    );
  }
}

export default FacebookButton;
