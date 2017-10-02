import theme from './../../../../assets/theme';

export default `
  .facebook-button {
    position: relative;
    width: 100%;
    height: 50px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 15px;
    background-color: #4568b2;
    color: ${theme.white};
    border: none;
    border-radius: 4px;
    line-height: 2.8;
  }

  .facebook-button:hover {
    background-color: rgba(69,104,178, 0.9)
  }

  .children {
    position: relative;
    top: -6px;
  }
`;
