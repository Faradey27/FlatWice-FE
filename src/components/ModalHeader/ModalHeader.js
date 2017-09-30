import { func } from 'prop-types';
import CloseIcon from './imgs/Close.svg';
import styles from './ModalHeaderStyles';

const ModalHeader = ({ onRequestClose }) => (
  <div
    className="modalHeader"
    data-testid="modalHeader"
  >
    <div
      className="modalHeaderCloseIcon"
      data-testid="modalHeaderCloseIcon"
      tabIndex={0}
      onClick={onRequestClose}
    >
      <CloseIcon />
    </div>
    <style jsx>{styles}</style>
  </div>
);

ModalHeader.propTypes = {
  onRequestClose: func,
};

export default ModalHeader;
