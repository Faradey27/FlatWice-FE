import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

/* istanbul ignore next */
const GoogleMapWrapper = withScriptjs(withGoogleMap(() =>
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultZoom={8}
  >
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));

export default GoogleMapWrapper;
