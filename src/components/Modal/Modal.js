import { Component } from 'react';
import { node, bool, func } from 'prop-types';
import styles from './ModalStyles';

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
      // TODO should return null after https://github.com/airbnb/enzyme/issues/1163 fixed
      return <div style={{ position: 'fixed', top: 0, left: 0 }}/>;
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
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Modal;
