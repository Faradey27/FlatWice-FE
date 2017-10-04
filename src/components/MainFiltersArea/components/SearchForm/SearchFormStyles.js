import theme from './../../../../assets/theme';

export default `
  .action-button {
    display: flex;
    margin-left: 20px;
  }
  .form {
    width: 100%;
    display: flex;
  }
  .search-icon {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .search {
    display: flex;
    align-items: center;
    font-size: 19px;
    min-width: 400px;
    color: ${theme.defaultColor};
    border-radius: 4px;
    border: 1px solid ${theme.borderColor};
    box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.08);
    padding: 0px;
    height: 60px;
    width: 100%;
    position: relative;
  }
`;
