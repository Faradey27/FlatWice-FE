import { Component } from 'react';
import { l } from './../../i18n';

import Logo from './../Logo';
import Button from './../Button';
import ActionButton from './../ActionButton';

class HeaderBar extends Component {
  render() {
    return (
      <div data-testid="headerBar">
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
      </div>
    );
  }
}

export default HeaderBar;
