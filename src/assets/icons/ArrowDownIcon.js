import { string, number } from 'prop-types';

const ArrowDownIcon = ({ height, width, stroke }) => (
  <svg
    fill="none"
    height={height}
    id="i-chevron-bottom"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 32 32"
    width={width}
  >
    <path d="M30 12 L16 24 2 12" />
  </svg>
);

ArrowDownIcon.defaultProps = {
  height: 14,
  width: 14,
  stroke: '#767676',
};

ArrowDownIcon.propTypes = {
  height: number,
  stroke: string,
  width: number,
};

export default ArrowDownIcon;
