import Remember from './imgs/Remember.svg';

const FlatCardFooter = () => (
  <div className="card-footer">
    <div className="card-footer-body">
      <div className="card-footer-author">
        <img
          className="card-footer-avatar"
          src="https://cdn-images-1.medium.com/fit/c/80/80/1*c9lYbCK1CYenT88M-2WicA.png"
        />
        <div className="card-footer-author-group">
          <span className="card-footer-author-name">{'The Economist'}</span>
          <span className="card-footer-date">{'20 minutes ago'}</span>
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
        .card-footer-avatar {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin-right: 10px;
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

export default FlatCardFooter;
