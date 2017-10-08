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
  @media (${theme.mediumViewport}) {
    .cardsLayer {
      grid-template-columns: calc(50% - 18px) calc(50% - 18px);
    }
  }
  @media (${theme.smallViewport}) {
    .cardsLayer {
      grid-template-columns: 100%;
      padding: 0 36px;
    }
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
`;
