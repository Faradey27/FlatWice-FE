import theme from './../../assets/theme';

export default `
  .filters-form {
    display: flex;
    width: 100%;
    padding-bottom: 15px;
  }

  @media (${theme.mobile}) {
    .filters-form {
      display: none;
    }
  }
`;
