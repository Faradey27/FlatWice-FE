import { Component } from 'react';
import { bool, func, element, oneOfType, string, number, node } from 'prop-types';
import ActionButton from './components/ActionButton';
import FacebookButton from './components/FacebookButton';
import GoogleButton from './components/GoogleButton';
import styles from './ButtonStyles';

class Button extends Component {
  static propTypes = {
    accent: bool,
    children: oneOfType([element, string, node]),
    dataTestId: string,
    facebook: bool,
    google: bool,
    marginLeft: number,
    primary: bool,
    secondary: bool,
    withMarginRight: bool,
    onClick: func,
  }

  renderAccentButton() {
    return (
      <ActionButton
        dataTestId={this.props.dataTestId}
        marginLeft={this.props.marginLeft}
        theme="accent"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </ActionButton>
    );
  }

  renderPrimaryButton() {
    return (
      <ActionButton
        dataTestId={this.props.dataTestId}
        marginLeft={this.props.marginLeft}
        theme="primary"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </ActionButton>
    );
  }

  renderSecondaryButton() {
    return (
      <ActionButton
        dataTestId={this.props.dataTestId}
        marginLeft={this.props.marginLeft}
        theme="secondary"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </ActionButton>
    );
  }

  renderFacebookButton() {
    return (
      <FacebookButton>{this.props.children}</FacebookButton>
    );
  }

  renderGoogleButton() {
    return (
      <GoogleButton>{this.props.children}</GoogleButton>
    );
  }

  render() {
    const { dataTestId, withMarginRight, facebook, google, accent, secondary, primary } = this.props;

    if (secondary) {
      return this.renderSecondaryButton();
    }

    if (primary) {
      return this.renderPrimaryButton();
    }

    if (accent) {
      return this.renderAccentButton();
    }

    if (facebook) {
      return this.renderFacebookButton();
    }

    if (google) {
      return this.renderGoogleButton();
    }

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
