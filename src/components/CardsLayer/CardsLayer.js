import { array } from 'prop-types';
import FlatCard from './../FlatCard';
import Filters from './../Filters';
import styles from './CardsLayerStyles';

const CardsLayer = ({ cards }) => (
  <div className="cardsLayerWrapper">
    <Filters />
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
    <style jsx>{styles}</style>
  </div>
);

CardsLayer.defaultProps = { // eslint-disable-line
  cards: [],
};

CardsLayer.propTypes = {
  cards: array,
};

export default CardsLayer;
