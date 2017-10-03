import { string, number } from 'prop-types';

const ArrowUpIcon = ({ height, width, stroke }) => (
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
    <path d="M30 20 L16 8 2 20" />
  </svg>
);

ArrowUpIcon.defaultProps = {
  height: 14,
  width: 14,
  stroke: '#767676',
};

ArrowUpIcon.propTypes = {
  height: number,
  stroke: string,
  width: number,
};

export default ArrowUpIcon;
