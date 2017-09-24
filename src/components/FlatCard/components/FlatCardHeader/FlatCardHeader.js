import { string } from 'prop-types';
import ArrowLeft from './imgs/ArrowLeft.svg';
import ArrowRight from './imgs/ArrowRight.svg';

const FlatCardHeader = ({ mainPhoto }) => (
  <div className="card-header">
    <img
      height="100%"
      src={mainPhoto}
      width="100%"
    />
    <div className="arrow-left"><ArrowLeft /></div>
    <div className="arrow-right"><ArrowRight /></div>
    <div className="price">
      {'6500 грн'}
    </div>
    <style jsx>
      {`
      .card-header {
        position: relative;
        width: 100%;
        height: 45%;
        cursor: zoom-in;
      }
      .price {
        background-color: rgba(60,63,64,0.9);
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 8px 20px;
        font-size: 22px;
        color: white;
        font-weight: 700;
      }
      .arrow-left {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .arrow-right {
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
    `}
    </style>
  </div>
);

FlatCardHeader.propTypes = {
  mainPhoto: string,
};

export default FlatCardHeader;
