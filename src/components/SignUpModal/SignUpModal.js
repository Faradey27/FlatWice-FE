import { Component } from 'react';
import Link from 'next/link';
import { l } from './../../i18n';
import FacebookButton from './../FacebookButton';
import GoogleButton from './../GoogleButton';
import Input from './../Input';

import styles from './SignUpModalStyles';

class signUpModal extends Component {
  render() {
    return (
      <div
        className="signUpModal"
        data-testid="signUpModal"
      >
        <div className="social-login">
          <FacebookButton>{l('Sign up with Facebook')}</FacebookButton>
          <GoogleButton>{l('Sign up with Google')}</GoogleButton>
        </div>
        <div className="or">{l('or')}</div>
        <div className="default-login">
          <div style={{ marginBottom: 12 }}>
            <Input
              placeholder={l('Email')}
              theme="formField"
            />
          </div>
          <Input
            placeholder={l('Password')}
            theme="formField"
          />
        </div>
        <div className="divider"/>
        <div className="already-registered">
          {l('Already registered?')}{' '}
          <span className="link">
            <Link to="/?modal=logIn">{l('Enter')}</Link>
          </span>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default signUpModal;
