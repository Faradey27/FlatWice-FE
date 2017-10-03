import { string, number } from 'prop-types';

const CloseIcon = ({ height, width, stroke }) => (
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
    <path d="M2 30 L30 2 M30 30 L2 2" />
  </svg>

);

CloseIcon.defaultProps = {
  height: 20,
  width: 20,
  stroke: 'currentcolor',
};

CloseIcon.propTypes = {
  height: number,
  stroke: string,
  width: number,
};

export default CloseIcon;
