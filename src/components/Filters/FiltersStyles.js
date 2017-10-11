import theme from './../../assets/theme';

export default `
  .filters-form {
    display: flex;
    width: 100%;
    padding-bottom: 15px;
  }

  @media (${theme.tablet}) {
    .filters-form {
      padding-left: 12px;
      padding-right: 12px;
    }
    .choose-location-map {
      display: none;
    }
  }

  @media (${theme.mobile}) {
    .filters-form {
      display: none;
    }
  }
`;
