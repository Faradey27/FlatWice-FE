export default `
  .signUpModal {
    width: 100%;
    height: calc(100% - 40px);
  }
  .social-login {
  }
  .or {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center;
    position: relative;
  }
  .or:before {
    content: '';
    width: calc(50% - 30px);
    border-top: 1px solid #e4e4e4;
    position: absolute;
    right: calc(50% + 30px);
    top: 9px;
  }
  .or:after {
    content: '';
    width: calc(50% - 30px);
    border-top: 1px solid #e4e4e4;
    position: absolute;
    left: calc(50% + 30px);
    top: 9px;
  }
  .divider {
    width: 100%;
    border-top: 1px solid #e4e4e4;
    margin-top: 22px;
    margin-bottom: 16px;
  }
  .already-registered {
    font-size: 19px;
    text-align: center;
  }
  .link {
    color: #008489;
  }
`;
