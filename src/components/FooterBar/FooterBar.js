import { Component } from 'react';
import Link from '../Link';
import { l } from './../../i18n';

import Button from './../Button';
import styles from './FooterBarStyles';

class FooterBar extends Component {
  render() {
    return (
      <div
        className="footer"
        data-testid="footerBar"
      >
        <Link href="/about">
          <Button
            withMarginRight
            onClick={this.handleSignUp}
          >
            {l('About us')}
          </Button>
        </Link>
        <Link href="/help">
          <Button
            withMarginRight
            onClick={this.handleSignUp}
          >
            {l('Help')}
          </Button>
        </Link>
        <Link href="/rules">
          <Button
            withMarginRight
            onClick={this.handleSignUp}
          >
            {l('Rules')}
          </Button>
        </Link>
        <Link href="/career">
          <Button
            withMarginRight
            onClick={this.handleSignUp}
          >
            {l('Career')}
          </Button>
        </Link>
        <Link href="/sitemap">
          <Button onClick={this.handleSignUp}>
            {l('Site map')}
          </Button>
        </Link>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default FooterBar;
