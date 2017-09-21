import { node } from 'prop-types';

const ModalContent = ({ children }) => (
  <div
    className="modalContent"
    data-testid="modalContent"
  >
    {children}
    <style jsx>
      {`
        @import 'theme.css';
        .modalContent {
          display: flex;
          width: 540px;
          height: 370px;
          padding: 30px;
          background-color: var(--white);
          box-shadow: var(--boxShadow);
        }
      `}
    </style>
  </div>
);

ModalContent.propTypes = {
  children: node,
};

export default ModalContent;
