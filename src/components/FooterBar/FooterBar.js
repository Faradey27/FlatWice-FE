import { Component } from 'react';
import Link from '../Link';
import { l } from './../../i18n';

import Button from './../Button';

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
        <style jsx>
          {`
            .footer {
              display: flex;
              align-items: center;
              height: 60px;
              border-top: 1px solid #e4e4e4;
              margin-top: 48px;
              margin-left: 24px;
              margin-right: 24px;
            }
          `}
        </style>
      </div>
    );
  }
}

export default FooterBar;
