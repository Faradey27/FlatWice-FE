import { PureComponent } from 'react';
import GoogleMap from './../GoogleMap';
import styles from './FlatMapStyles';

class FlatMap extends PureComponent {
  render() {
    return (
      <div
        className="flatMap"
        data-testid="flatMap"
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
