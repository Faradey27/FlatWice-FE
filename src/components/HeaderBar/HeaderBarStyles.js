import theme from './../../assets/theme';

export default `
  .headerBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 10px;
    box-shadow: ${theme.boxShadow};
  }

  .leaseApartment {
    display: inline-block;
  }

  @media ${theme.mobileL} {
    .leaseApartment {
      display: none;
    }
  }

  @media ${theme.mobileM} {
    .leaseApartment {
      display: none;
    }
  }
`;
