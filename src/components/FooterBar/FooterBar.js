import { Component } from 'react';
import Link from '../Link';
import { l } from './../../i18n';

import Button from './../Button';

class FooterBar extends Component {
  render() {
    return (
      <div data-testid="footerBar">
        <Link href="/about">
          <Button onClick={this.handleSignUp}>
            {l('About us')}
          </Button>
        </Link>
        <Link href="/help">
          <Button onClick={this.handleSignUp}>
            {l('Help')}
          </Button>
        </Link>
        <Link href="/rules">
          <Button onClick={this.handleSignUp}>
            {l('Rules')}
          </Button>
        </Link>
        <Link href="/career">
          <Button onClick={this.handleSignUp}>
            {l('Career')}
          </Button>
        </Link>
        <Link href="/siteMap">
          <Button onClick={this.handleSignUp}>
            {l('Site map')}
          </Button>
        </Link>
      </div>
    );
  }
}

export default FooterBar;
