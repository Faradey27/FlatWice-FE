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
    <div className="card-body">
      <span className="card-body-title">{'Classical Apartment on Royal Mile'}</span>
      <p className="description">{`
        Cair Paravel Farmstead transports you into another realm. Come experience
        living in a round structure filled with amenities-
        fully equipped kitchen, deep tub, heating and AC, shared hot tub and seasonal salt water pool.
        fully equipped kitchen, deep tub, heating and AC, shared hot tub and seasonal salt water pool.
      `}</p>
    </div>
    <div className="card-tags-body">
      <div className="card-tags-title">{'Tags: '}</div>
      <div className="card-tags">
        <div className="card-tag">{'Center'}</div>
        <div className="card-tag">{'flat'}</div>
        <div className="card-tag">{'owner'}</div>
        <div className="card-tag">{'owner'}</div>
      </div>
    </div>
    <div className="card-footer">
      <div className="card-footer-body">
        <div className="author">
          <img
            className="avatar"
            src="https://cdn-images-1.medium.com/fit/c/80/80/1*c9lYbCK1CYenT88M-2WicA.png"
          />
          <div className="author-group">
            <span className="author-name">{'The Economist'}</span>
            <span className="date">{'20 minutes ago'}</span>
          </div>
        </div>
      </div>
    </div>
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
          height: 45%;
          cursor: zoom-in;
        }
        .card-body {
          width: 100%;
          padding: 16px 30px 0 30px;
        }
        .card-footer {
          width: 100%;
          padding: 8px 30px 0 30px;
        }
        .card-footer-body {
          padding-top: 10px;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .card-tags-body {
          display: flex;
          align-items: center;
          padding: 0 30px;
          max-height: 40px;
        }
        .card-tags-title {
          margin-right: 10px;
          margin-top: 8px;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin-right: 10px;
        }
        .author {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          width: 100%;
        }
        .author-name {
          width: 100%;
        }
        .author-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        .date {
          font-size: 12px;
          color: rgba(0,0,0,.44);
        }
        .card-tags {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
        }
        .card-tag {
          margin-top: 8px;
          display: inline-block;
          border: 1px solid rgba(0, 0, 0, .44);
          border-radius: 4px;
          color: rgba(0, 0, 0, .44);
          padding: 5px;
          margin-right: 8px;
          cursor: pointer;
          background-color: #f3f3f3;
        }
        .card-body-title {
          font-size: 20px;
          font-weight: 700;
        }
        .description {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          line-height: 1.5rem;
          max-height: 6rem;
          font-size: 16px;
          color: rgba(0,0,0,.5);
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
