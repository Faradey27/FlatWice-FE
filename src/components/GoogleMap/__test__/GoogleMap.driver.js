import { mount } from 'enzyme';
import GoogleMap from './../index';

export default class GoogleMapDriver {
  when = {
    created: (props) => {
      this.component = mount(<GoogleMap
        containerElement={<div style={{ height: '100vh' }} />}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        isMarkerShown
        loadingElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        {...props}
      />);

      return this;
    },
  };

  is = {
    ok: () => this.component.find('div').length,
  }
}
