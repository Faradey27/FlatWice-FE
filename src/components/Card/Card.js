import { object } from 'prop-types';

const Card = ({ cardData }) => (
  <div
    className="card"
    data-testid="card"
  >
    {cardData.id}
    <style jsx>
      {`
        @import 'theme.css';
        .card {
          display: flex;
          height: 535px;
          max-width: 420px;
          width: 100%;
          box-shadow: var(--boxShadow);
          background: blue;
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
