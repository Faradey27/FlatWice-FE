import theme from './../../assets/theme';

export default `
  .homePage {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
  .layer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    overflow: hidden;
  }
  .home-card-flats {
    float: left;
    position: relative;
    width: 100%;
  }
  @media (${theme.mobile}) {
    .home-card-flats {
      display: flex;
    }
  }
`;
