import { Component } from 'react';
import { func, element, string, oneOfType, node } from 'prop-types';
import GoogleIcon from './../../../../assets/icons/GoogleIcon.svg';
import styles from './GoogleButtonStyles';

class GoogleButton extends Component {
  static propTypes = {
    children: oneOfType([element, string, node]),
    theme: string,
    onClick: func,
  }

  render() {
    return (
      <button
        className={`google-button ${this.props.theme}`}
        data-testid="googleButton"
        onClick={this.props.onClick}
      >
        <span id={6}>
          <GoogleIcon />
          <span className="children">{this.props.children}</span>
        </span>
        <style jsx>{styles}</style>
      </button>
    );
  }
}

export default GoogleButton;
