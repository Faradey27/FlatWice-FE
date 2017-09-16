import { object } from 'prop-types';

const Card = ({ cardData }) => (
  <div data-testid="card">
    {cardData.id}
  </div>
);

Card.defaultProps = { // eslint-disable-line
  cardData: {},
};

Card.propTypes = {
  cardData: object,
};

export default Card;
