import { object } from 'prop-types';
import FlatCardHeader from './components/FlatCardHeader';
import FlatCardBody from './components/FlatCardBody';
import FlatCardTags from './components/FlatCardTags';
import FlatCardFooter from './components/FlatCardFooter';

const FlatCard = ({ cardData }) => (
  <div
    className="flat-card"
    data-testid="flat-card"
  >
    <FlatCardHeader mainPhoto={cardData.mainPhoto} />
    <FlatCardBody shortDescription={cardData.shortDescription}/>
    <FlatCardTags
      apartmentArea={cardData.apartmentArea}
      numberOfRooms={cardData.numberOfRooms}
      tags={cardData.tags}
    />
    <FlatCardFooter
      author={cardData.author}
      updatedAt={cardData.updatedAt}
    />
    <style jsx>
      {`
        @import 'theme.css';
        .flat-card {
          display: flex;
          flex-wrap: wrap;
          height: 535px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 2px 6px -2px rgba(22,22,22,0.45);
        }
      `}
    </style>
  </div>
);

FlatCard.defaultProps = { // eslint-disable-line
  cardData: {},
};

FlatCard.propTypes = {
  cardData: object,
};

export default FlatCard;
