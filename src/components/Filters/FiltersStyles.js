import theme from './../../assets/theme';

export default `
  .filters-form {
    display: flex;
    width: 100%;
    padding-bottom: 15px;
  }

  @media ${theme.laptopL} {
    .choose-location-map {
      display: none;
    }
  }

  @media ${theme.laptop} {
    .filters-form {
      padding-left: 18px;
      padding-right: 18px;
    }
  }

  @media ${theme.tablet} {
    .filters-form {
      padding-left: 12px;
      padding-right: 12px;
    }
    .choose-location-map {
      display: none;
    }
  }

  @media ${theme.mobileL} {
    .filters-form {
      display: none;
    }
  }
  @media ${theme.mobileM} {
    .filters-form {
      display: none;
    }
  }
`;
