import { Component } from 'react';
import { node, bool, func } from 'prop-types';

class Modal extends Component {
  static propTypes = {
    children: node,
    isOpen: bool,
    onRequestClose: func,
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (e) => {
    if (e.key === 'Escape' && this.props.isOpen && this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  }

  handleOverlayClick = () => {
    if (this.props.onRequestClose) {
      this.props.onRequestClose();
    }
  }

  render() {
    const { isOpen, children } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div
        className="modal"
        data-testid="modal"
      >
        <div
          className="overlay"
          data-testid="overlay"
          onClick={this.handleOverlayClick}
        />
        <div
          className="modalBody"
          tabIndex="0"
        >
          {children}
        </div>
        <style jsx>
          {`
            .modal {
              position: fixed;
              width: 100%;
              height: 100%;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 10;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .overlay {
              position: fixed;
              width: 100%;
              height: 100%;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              z-index: 9;
              background-color: rgba(0, 0, 0, 0.75);
            }
            .modalBody {
              position: relative;
              z-index: 11;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Modal;
