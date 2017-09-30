import { node } from 'prop-types';
import styles from './ModalContentStyles';

const ModalContent = ({ children }) => (
  <div
    className="modalContent"
    data-testid="modalContent"
  >
    {children}
    <style jsx>{styles}</style>
  </div>
);

ModalContent.propTypes = {
  children: node,
};

export default ModalContent;
