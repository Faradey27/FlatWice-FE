import { Component } from 'react';
import Link from './../Link';
import { l } from './../../i18n';
import Button from './../Button';
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
          <Button facebook>{l('Sign up with Facebook')}</Button>
          <Button google>{l('Sign up with Google')}</Button>
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
            <Link href="/?modal=logIn">{l('Enter')}</Link>
          </span>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default signUpModal;
