import { object } from 'prop-types';

const Card = ({ cardData }) => (
  <div
    className="card"
    data-testid="card"
  >
    <div className="card-header">
      <img
        height="100%"
        src={cardData.mainPhoto}
        width="100%"
      />
    </div>
    {cardData.id}
    <style jsx>
      {`
        @import 'theme.css';
        .card {
          display: flex;
          flex-wrap: wrap;
          height: 535px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 2px 6px -2px rgba(22,22,22,0.45);
        }
        .card-header {
          width: 100%;
          max-height: 250px;
          cursor: zoom-in;
        }
      `}
    </style>
  </div>
);

Card.defaultProps = { // eslint-disable-line
  cardData: {},
};

Card.propTypes = {
  cardData: object,
};

export default Card;
