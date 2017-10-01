import { shape, string, number } from 'prop-types';
import { getTimeAgoLabel } from './../../../../utils/time';
import Img from './../../../Img';
import Remember from './../../../../assets/icons/Remember.svg';

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
      {`
        .card-footer {
          width: 100%;
          padding: 16px 30px 0 30px;
          display: flex;
          align-items: center;
        }
        .card-footer-body {
          display: flex;
          align-items: center;
          width: 100%;
          margin-bottom: 10px;
        }
        .card-footer-author {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          width: 100%;
        }
        .card-footer-author-name {
          width: 100%;
        }
        .card-footer-author-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .card-footer-date {
          font-size: 12px;
          color: rgba(0,0,0,.44);
        }
        .remember-icon {
          cursor: pointer;
        }
      `}
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
