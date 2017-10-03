import { string, number } from 'prop-types';

const SearchIcon = ({ height, width, stroke }) => (
  <svg
    fill="none"
    height={height}
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 32 32"
    width={width}
  >
    <circle
      cx="14"
      cy="14"
      r="12"
    />
    <path d="M23 23 L30 30" />
  </svg>
);

SearchIcon.defaultProps = {
  height: 22,
  width: 22,
  stroke: '#767676',
};

SearchIcon.propTypes = {
  height: number,
  stroke: string,
  width: number,
};

export default SearchIcon;
