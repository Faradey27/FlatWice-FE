import { string, number, arrayOf } from 'prop-types';
import { l } from './../../../../i18n';

const FlatCardTags = ({ tags, numberOfRooms, apartmentArea }) => (
  <div className="card-tags-body">
    <div className="card-tags">
      <div className="card-tag">
        {numberOfRooms}{' '}{l('rooms')}
      </div>
      <div className="card-tag">
        {apartmentArea}{' '}{l('m^2')}
      </div>
      {tags.map((tag) => (
        <div
          className="card-tag"
          key={tag}
        >
          {tag}
        </div>
      ))}
    </div>
    <style jsx>
      {`
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
      `}
    </style>
  </div>
);

FlatCardTags.defaultProps = { // eslint-disable-line
  tags: [],
};

FlatCardTags.propTypes = {
  apartmentArea: number,
  numberOfRooms: number,
  tags: arrayOf(string),
};

export default FlatCardTags;
