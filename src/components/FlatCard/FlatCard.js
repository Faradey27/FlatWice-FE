import { object } from 'prop-types';
import FlatCardHeader from './components/FlatCardHeader';
import FlatCardBody from './components/FlatCardBody';
import FlatCardTags from './components/FlatCardTags';
import FlatCardFooter from './components/FlatCardFooter';

import styles from './FlatCardStyles';

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
    <style jsx>{styles}</style>
  </div>
);

FlatCard.defaultProps = {
  cardData: {},
};

FlatCard.propTypes = {
  cardData: object,
};

export default FlatCard;
