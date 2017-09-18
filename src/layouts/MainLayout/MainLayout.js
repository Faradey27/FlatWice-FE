import { node } from 'prop-types';
import HeaderBar from './../../components/HeaderBar';
import FooterBar from './../../components/FooterBar';

const MainLayout = ({ children }) => (
  <div>
    <HeaderBar/>
    {children}
    <FooterBar />
    <style
      global
      jsx
    >
      {`
        body, html {
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);

MainLayout.propTypes = {
  children: node,
};

export default MainLayout;
