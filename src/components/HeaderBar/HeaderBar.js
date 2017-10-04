import { Component } from 'react';
import { shape, object } from 'prop-types';
import { withRouter } from 'next/router';
import { l } from './../../i18n';

import Logo from './../Logo';
import Button from './../Button';
import Modal from './../Modal';
import ModalHeader from './../ModalHeader';
import ModalContent from './../ModalContent';
import SignUpModal from './../SignUpModal';
import LogInModal from './../LogInModal';
import styles from './HeaderBarStyles';

class HeaderBar extends Component {
  static propTypes = {
    router: shape({
      query: object,
    }),
  }

  updateLocation = (href) => this.props.router.push(href, href, { shallow: true })

  handleLogIn = () => this.updateLocation('/?modal=logIn');
  handleSignUp = () => this.updateLocation('/?modal=signUp');
  handleModalClose = () => this.updateLocation('/');

  renderModalBody() {
    const modalType = this.props.router.query.modal;
    const hash = {
      signUp: () => <SignUpModal />,
      logIn: () => <LogInModal />,
    };

    return hash[modalType] ? hash[modalType]() : null;
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
          isOpen={Boolean(this.props.router.query.modal)}
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

export default withRouter(HeaderBar);
