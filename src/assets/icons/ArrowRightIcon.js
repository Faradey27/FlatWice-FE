import { string, number } from 'prop-types';

const ArrowRightIcon = ({ height, width, stroke }) => (
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
    <path d="M12 30 L24 16 12 2" />
  </svg>

);

ArrowRightIcon.defaultProps = {
  height: 32,
  width: 32,
  stroke: '#fff',
};

ArrowRightIcon.propTypes = {
  height: number,
  stroke: string,
  width: number,
};

export default ArrowRightIcon;
