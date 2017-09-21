import { func } from 'prop-types';
import CloseIcon from './imgs/Close.svg';

const ModalHeader = ({ onRequestClose }) => (
  <div
    className="modalHeader"
    data-testid="modalHeader"
  >
    <div
      className="modalHeaderCloseIcon"
      data-testid="modalHeaderCloseIcon"
      tabIndex={1}
      onClick={onRequestClose}
    >
      <CloseIcon />
    </div>
    <style jsx>
      {`
        .modalHeader {
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          height: 40px;
          width: 100%;
        }
        .modalHeaderCloseIcon {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
        .modalHeaderCloseIcon:hover {
          opacity: 0.8;
        }
      `}
    </style>
  </div>
);

ModalHeader.propTypes = {
  onRequestClose: func,
};

export default ModalHeader;
