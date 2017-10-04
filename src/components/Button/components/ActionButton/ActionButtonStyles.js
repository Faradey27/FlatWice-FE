import theme from './../../../../assets/theme';

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
    background-color: ${theme.secondaryColorActive};
  }

  .accent {
    background-color: ${theme.primaryColor};
    box-shadow: ${theme.boxShadow};
  }

  .accent:hover {
    background-color: ${theme.primaryColorActive} !important;
  }

  .secondary {
    background-color: transparent;
    color: ${theme.hoverColor};
    font-size: 15px;
  }

  .secondary:hover {
    background-color: ${theme.thirdColor}  !important;
  }
`;
