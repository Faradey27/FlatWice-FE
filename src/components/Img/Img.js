import { string } from 'prop-types';

const Img = ({ src, alt }) => (
  <img
    alt={alt}
    data-testid="image"
    src={src}
  />
);

Img.propTypes = {
  alt: string.isRequired,
  src: string.isRequired,
};

export default Img;
