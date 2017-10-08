import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMapWrapper = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    defaultZoom={8}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

export default GoogleMapWrapper;
