import theme from './../../../../assets/theme';

export default `
  .google-button {
    position: relative;
    width: 100%;
    height: 50px;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 15px;
    background-color: #fff;
    color: ${theme.defaultColor};
    border: 1px solid #767676;
    border-radius: 4px;
    line-height: 2.8;
  }

  .google-button:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }

  .children {
    position: relative;
    top: -6px;
    margin-left: 5px;
  }
`;
