export default `
  .button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    border: none;
    background: none;
    text-align: center;
    padding: 8px 0;
  }
  .button:hover:before {
    position: absolute;
    bottom: -4px;
    content: ' ';
    width: 100%;
    border-bottom: 2px solid #767676;
  }
  .marginRight {
    margin-right: 20px;
  }
`;
