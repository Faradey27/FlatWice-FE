import { Component } from 'react';
import GoogleMap from './../GoogleMap';
import styles from './FlatMapStyles';

class FlatMap extends Component {
  state = {
    isFixedPosition: false,
    top: 0,
  }

  componentDidMount() {

    /* window.addEventListener('scroll', () => {
      const sTop = window.pageYOffset;

      if (sTop >= this.node.offsetTop && !this.state.isFixedPosition) {
        this.setState({
          isFixedPosition: true,
          top: sTop,
        });
      } else if (sTop < this.node.offsetTop && this.state.isFixedPosition) {
        this.setState({
          isFixedPosition: false,
          top: 0,
        });
      }
    });*/
  }

  setDomNode = (node) => {
    this.node = node;
  }

  render() {
    return (
      <div
        className="flatMap"
        data-testid="flatMap"
        ref={this.setDomNode}
      >
        <div className="flatMap-wrapper">
          <div
            className="flatMap-root"
          >
            <GoogleMap
              containerElement={<div style={{ height: '100vh' }} />}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              isMarkerShown
              loadingElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default FlatMap;
