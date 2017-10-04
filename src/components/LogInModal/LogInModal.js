import { Component } from 'react';
import Link from './../Link';
import { l } from './../../i18n';
import Button from './../Button';
import Input from './../Input';

import styles from './LogInModalStyles';

class signUpModal extends Component {
  render() {
    return (
      <div
        className="logInModal"
        data-testid="logInModal"
      >
        <div className="social-login">
          <Button facebook>{l('Log in with Facebook')}</Button>
          <Button google>{l('Log in with Google')}</Button>
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
        <div className="not-registered">
          {l('Not registered?')}{' '}
          <span className="link">
            <Link
              href="/?modal=signUp"
              shallow
            ><a>{l('Registration')}</a></Link>
          </span>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default signUpModal;
