import { Component } from 'react';
import { l } from './../../i18n';

import Logo from './../Logo';
import Button from './../Button';
import Modal from './../Modal';
import ModalHeader from './../ModalHeader';
import ModalContent from './../ModalContent';
import SignUpModal from './../SignUpModal';
import styles from './HeaderBarStyles';

class HeaderBar extends Component {
  state = {
    isOpen: false,
  }

  handleSignUp = () => this.setState({ isOpen: true, modalType: 'signUp' })
  handleLogIn = () => this.setState({ isOpen: true, modalType: 'logIn' })

  handleModalClose = () => this.setState({ isOpen: false })

  renderModalBody() {
    const hash = {
      signUp: () => <SignUpModal />,
      logIn: () => <div data-testid="logInModal" />,
    };

    return hash[this.state.modalType] ? hash[this.state.modalType]() : null;
  }

  render() {
    return (
      <div
        className="headerBar"
        data-testid="headerBar"
      >
        <div>
          <Logo />
        </div>
        <div>
          <Button
            dataTestId="signUp"
            withMarginRight
            onClick={this.handleSignUp}
          >
            {l('Sign up')}
          </Button>
          <Button
            dataTestId="logIn"
            withMarginRight
            onClick={this.handleLogIn}
          >
            {l('Log in')}
          </Button>
          <Button
            dataTestId="leaseApartment"
            primary
            onClick={this.handleLeaseApartment}
          >
            {l('Lease apartment')}
          </Button>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleModalClose}
        >
          <ModalContent>
            <ModalHeader onRequestClose={this.handleModalClose}/>
            {this.renderModalBody()}
          </ModalContent>
        </Modal>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default HeaderBar;
