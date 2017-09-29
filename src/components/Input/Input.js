import { string } from 'prop-types';

const Input = ({ name, theme, placeholder }) => (
  <div
    className={`input-wrap ${theme}-wrap`}
    data-testid="input-parent"
  >
    <input
      className={theme}
      data-testid="input"
      id={name}
      name={name}
      placeholder={placeholder}
    />
    <style jsx>
      {`
        .input-wrap {
          display: flex;
        }
        .search-wrap {
          padding: 12px 32px 12px 0;
          width: 100%;
        }
        .search {
          border: none;
          font-size: 18px;
        }
        .price-wrap {
          width: 100%;
        }
        .price {
          border: none;
          font-size: 18px;
          padding: 10px;
          width: 100%;
        }
        .rooms-wrap {
          width: 100%;
        }
        .rooms {
          border: none;
          font-size: 18px;
          padding: 10px;
          width: 100%;
        }
      `}
    </style>
  </div>
);

Input.propTypes = {
  name: string,
  placeholder: string,
  theme: string,
};

export default Input;
