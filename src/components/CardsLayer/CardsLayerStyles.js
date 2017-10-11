import theme from './../../assets/theme';

export default `
  .cardsLayer {
    float: left;
    position: relative;
    display: grid;
    grid-template-columns: calc(8/24 * 100% - 24px) calc(8/24 * 100% - 24px) calc(8/24 * 100% - 24px);
    grid-gap: 36px;
    justify-items: center;
    width: 100%;
  }
  .cardsLayerWrapper {
    float: left;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 66%;
    max-width: 1300px;
    padding: 0 36px 0 60px;
  }

  @media (${theme.tablet}) {
    .cardsLayerWrapper {
      width: 100%;
      padding: 0 0px;
    }
    .cardsLayer {
      grid-template-columns: calc(50% - 18px) calc(50% - 18px);
      grid-gap: 18px;
      padding: 0 12px;
    }
  }

  @media (${theme.mobile}) {
    .cardsLayerWrapper {
      padding: 0 18px;
      width: 100%;
    }
    .cardsLayer {
      grid-template-columns: 100%;
      padding: 0 18px;
    }
  }

  @media (${theme.smallMobile}) {
    .cardsLayerWrapper {
      padding: 0 9px;
      width: 100%;
    }
    .cardsLayer {
      padding: 0 9px;
    }
  }
`;
