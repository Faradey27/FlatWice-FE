import { string, object } from 'prop-types';
import { Component } from 'react';

const PLACEHOLDER = `
  data:image/png;base64,
  iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnUlEQVR42u3RAQkAAAgDMN8frKw1RLYKS3VPcUaEC
  EGIEIQIQYgQhAgRIgQhQhAiBCFCECIEIQgRghAhCBGCECEIQYgQhAhBiBCECEEIQoQgRAhChCBECEIQIgQhQhAiBCF
  CEIIQIQgRghAhCBGCEIQIQYgQhAhBiBCEIEQIQoQgRAhChCAEIUIQIgQhQhAiBCFChAhBiBCECEHIdwuwddLxdxELtAAAAABJRU5ErkJggg==
`;

class Img extends Component {
  static propTypes = {
    alt: string,
    height: string,
    src: string.isRequired,
    style: object,
    width: string,
  }

  static defaultProps = {
    alt: '',
  }

  componentDidMount() {
    this.imgNode.src = this.props.src;
  }

  setImgNode = (node) => {
    this.imgNode = node;
  }

  render() {
    const { height, width, alt, style } = this.props;

    return (
      <img
        alt={alt}
        data-testid="image"
        height={height}
        ref={this.setImgNode}
        src={PLACEHOLDER}
        style={style}
        width={width}
      />
    );
  }
}

export default Img;
