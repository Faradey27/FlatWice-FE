import { string, number } from 'prop-types';

const ArrowLeftIcon = ({ height, width, stroke }) => (
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
    <path d="M20 30 L8 16 20 2" />
  </svg>
);

ArrowLeftIcon.defaultProps = {
  height: 32,
  width: 32,
  stroke: '#fff',
};

ArrowLeftIcon.propTypes = {
  height: number,
  stroke: string,
  width: number,
};

export default ArrowLeftIcon;
