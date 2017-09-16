import { array } from 'prop-types';

const CardsLayer = ({ cards }) => (
  <div data-testid="cardsLayer">
    {
      cards.map((card) => (
        <div
          data-testid="card"
          key={card.id}
        >
          {card.id}
        </div>
      ))
    }
  </div>
);

CardsLayer.defaultProps = { // eslint-disable-line
  cards: [],
};

CardsLayer.propTypes = {
  cards: array,
};

export default CardsLayer;
