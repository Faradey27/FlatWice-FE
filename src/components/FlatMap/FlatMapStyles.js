import theme from './../../assets/theme';

export default `
  .flatMap {
    vertical-align: top;
    overflow: hidden;
    position: sticky;
    top: 0;
  }
  .flatMap-wrapper {
    clear: left;
    position: relative;
  }
  .flatMap-root {
    width: 100%;
    height: 100vh;
    background: #eeeeee;
  }

  @media ${theme.laptop} {
    .flatMap {
      display: none;
    }
  }
  @media ${theme.tablet} {
    .flatMap {
      display: none;
    }
  }
  @media ${theme.mobileL} {
    .flatMap {
      display: none;
    }
  }
  @media ${theme.mobileM} {
    .flatMap {
      display: none;
    }
  }
`;
