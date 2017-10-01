import theme from './../../assets/theme';

export default `
  .action-button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    padding: 8px 15px;
    background-color: ${theme.secondaryColor};
    color: ${theme.white};
    border: none;
    border-radius: 4px;
  }

  .action-button:hover {
    background-color: color(${theme.secondaryColor} alpha(-15%));
  }

  .accent {
    background-color: ${theme.primaryColor};
    box-shadow: ${theme.boxShadow};
  }

  .accent:hover {
    background-color: color(${theme.primaryColor} alpha(-15%)) !important;
  }

  .secondary {
    background-color: transparent;
    color: rgb(118, 118, 118);
    font-size: 15px;
  }

  .secondary:hover {
    background-color: #F2F2F2  !important;
  }
`;
