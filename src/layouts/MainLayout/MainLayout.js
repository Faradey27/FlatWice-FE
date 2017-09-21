import { Component } from 'react';
import { node } from 'prop-types';
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
              min-width: 724px;
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
