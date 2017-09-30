import theme from './../../assets/theme';

export default `
  .logo-svg {
    fill: ${theme.primaryColor};
  }

  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .logo-text {
    margin-left: 10px;
    font-weight: 700;
    font-size: 22px;
    color: ${theme.primaryColor};
  }
`;
