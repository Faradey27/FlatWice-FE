import { string } from 'prop-types';
import styles from './FlatCardBodyStyles';

const FlatCardBody = ({ shortDescription }) => (
  <div className="card-body">
    <span className="card-body-title">{'Classical Apartment on Royal Mile'}</span>
    <p className="card-body-description">{shortDescription}</p>
    <style jsx>
      {styles}
    </style>
  </div>
);

FlatCardBody.propTypes = {
  shortDescription: string,
};

export default FlatCardBody;
