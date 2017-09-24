import { array } from 'prop-types';
import FlatCard from './../FlatCard';

const CardsLayer = ({ cards }) => (
  <div className="cardsLayerWrapper">
    <div
      className="cardsLayer"
      data-testid="cardsLayer"
    >
      {
        cards.map((card) => (
          <FlatCard
            cardData={card}
            key={card.id}
          />
        ))
      }
    </div>
    <style jsx>
      {`
        @import 'theme.css';
        .cardsLayer {
          display: grid;
          grid-template-columns: calc(8/24 * 100% - 24px) calc(8/24 * 100% - 24px) calc(8/24 * 100% - 24px);
          grid-gap: 36px;
          justify-items: center;
          width: 100%;
          max-width: 1246px;
          padding: 0 60px;
        }
        @media (--medium-viewport) {
          .cardsLayer {
            grid-template-columns: calc(50% - 18px) calc(50% - 18px);
          }
        }
        @media (--small-viewport) {
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
      `}
    </style>
  </div>
);

CardsLayer.defaultProps = { // eslint-disable-line
  cards: [],
};

CardsLayer.propTypes = {
  cards: array,
};

export default CardsLayer;
