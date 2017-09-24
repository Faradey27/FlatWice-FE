import { string } from 'prop-types';

const FlatCardHeader = ({ mainPhoto }) => (
  <div className="card-header">
    <img
      height="100%"
      src={mainPhoto}
      width="100%"
    />
    <style jsx>
      {`
      .card-header {
        width: 100%;
        height: 45%;
        cursor: zoom-in;
      }
    `}
    </style>
  </div>
);

FlatCardHeader.propTypes = {
  mainPhoto: string,
};

export default FlatCardHeader;
