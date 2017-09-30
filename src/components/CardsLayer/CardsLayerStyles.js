import theme from './../../assets/theme';

export default `
  .cardsLayer {
    display: grid;
    grid-template-columns: calc(8/24 * 100% - 24px) calc(8/24 * 100% - 24px) calc(8/24 * 100% - 24px);
    grid-gap: 36px;
    justify-items: center;
    width: 100%;
    max-width: 1246px;
    padding: 0 60px;
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
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;
