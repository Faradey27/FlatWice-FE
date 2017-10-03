import { string } from 'prop-types';
import Img from './../../../Img';
import ArrowLeft from './../../../../assets/icons/ArrowLeftIcon';
import ArrowRight from './../../../../assets/icons/ArrowRightIcon';

import styles from './FlatCardHeaderStyles';

const FlatCardHeader = ({ mainPhoto }) => (
  <div className="card-header">
    <Img
      height="100%"
      src={mainPhoto}
      width="100%"
    />
    <div className="arrow-left">
      <ArrowLeft />
    </div>
    <div className="arrow-right">
      <ArrowRight />
    </div>
    <div className="price">
      {'6500 грн'}
    </div>
    <style jsx>
      {styles}
    </style>
  </div>
);

FlatCardHeader.propTypes = {
  mainPhoto: string,
};

export default FlatCardHeader;
