import { shape, string, number } from 'prop-types';
import { getTimeAgoLabel } from './../../../../utils/time';
import Img from './../../../Img';
import Remember from './../../../../assets/icons/RememberIcon';

import styles from './FlatCardFooterStyles';

const FlatCardFooter = ({ author, updatedAt }) => (
  <div className="card-footer">
    <div className="card-footer-body">
      <div className="card-footer-author">
        <Img
          src={author.avatar}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
          }}
        />
        <div className="card-footer-author-group">
          <span className="card-footer-author-name">{author.name}</span>
          <span className="card-footer-date">{getTimeAgoLabel(updatedAt)}</span>
        </div>
      </div>
    </div>
    <div className="remember-icon">
      <Remember />
    </div>
    <style jsx>
      {styles}
    </style>
  </div>
);

FlatCardFooter.defaultProps = { // eslint-disable-line
  author: {
    name: 'Anonymos',
  },
};

FlatCardFooter.propTypes = {
  author: shape({
    name: string,
  }),
  updatedAt: number,
};

export default FlatCardFooter;
