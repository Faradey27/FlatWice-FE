import { Component } from 'react';
import { l } from './../../i18n';

import Logo from './../Logo';
import Button from './../Button';
import ActionButton from './../ActionButton';

class HeaderBar extends Component {
  render() {
    return (
      <div
        className="headerBar"
        data-testid="headerBar"
      >
        <div>
          <Logo />
        </div>
        <div>
          <Button
            withMarginRight
            onClick={this.handleSignUp}
          >
            {l('Sign up')}
          </Button>
          <Button
            withMarginRight
            onClick={this.handleLogIn}
          >
            {l('Log in')}
          </Button>
          <ActionButton onClick={this.handleLeaseApartment}>
            {l('Lease apartment')}
          </ActionButton>
        </div>
        <style jsx>
          {`
            @import 'theme.css';
            .headerBar {
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 60px;
              padding: 0 10px;
              box-shadow: var(--boxShadow);
            }
          `}
        </style>
      </div>
    );
  }
}

export default HeaderBar;
