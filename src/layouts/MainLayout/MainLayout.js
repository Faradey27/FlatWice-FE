import { Component } from 'react';
import { node } from 'prop-types';
import Head from 'next/head';
import HeaderBar from './../../components/HeaderBar';
import FooterBar from './../../components/FooterBar';

class MainLayout extends Component {
  static propTypes = {
    children: node,
  }

  render() {
    const { children } = this.props;

    return (
      <div data-testid="mainLayout">
        <Head>
          <link
            href="/static/favicon.png"
            rel="icon"
            type="image/png"
          />
          <meta
            content="width=device-width, initial-scale=1"
            name="viewport"
          />
          <title>{'FlatWice'}</title>
        </Head>
        <HeaderBar/>
        {children}
        <FooterBar />
        <style
          global
          jsx
        >
          {`
            @import "theme.css";

            body, html {
              margin: 0;
              padding: 0;
              font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
                          "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
              font-weight: 300;
              color: var(--defaultColor);
              min-width: 300px;
            }

            button, input {
              outline: none;
              font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
                          "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
              font-weight: 300;
              color: var(--defaultColor);
              line-height: 1.2;
            }
          `}
        </style>
      </div>
    );
  }
}

export default MainLayout;
