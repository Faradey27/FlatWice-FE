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
          <Button onClick={this.handleSignUp}>
            {l('Sign up')}
          </Button>
          <Button onClick={this.handleLogIn}>
            {l('Log in')}
          </Button>
          <ActionButton onClick={this.handleLeaseApartment}>
            {l('Lease apartment')}
          </ActionButton>
        </div>
        <style jsx>
          {`
            .headerBar {
              display: flex;
              align-items: center;
              height: 60px;
              padding: 0 10px;
              box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
            }
          `}
        </style>
      </div>
    );
  }
}

export default HeaderBar;
