import { string, number } from 'prop-types';

const RememberIcon = ({ height, width, stroke }) => (
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
    <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
  </svg>

);

RememberIcon.defaultProps = {
  height: 32,
  width: 32,
  stroke: '#484848',
};

RememberIcon.propTypes = {
  height: number,
  stroke: string,
  width: number,
};

export default RememberIcon;
