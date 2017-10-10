import { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import styles from './FlatMapStyles';

const GoogleMap = dynamic(import('./../GoogleMap'));

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
            {
              /* istanbul ignore next */
              GoogleMap
                ? (
                  <GoogleMap
                    containerElement={<div style={{ height: '100vh' }} />}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    isMarkerShown
                    loadingElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                  />
                )
                : null
            }
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default FlatMap;
