import * as React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'




class MapPage extends React.Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%" }}
          zoom={15}
          initialCenter={
            {
              lat: 40.7649462,
              lng: -111.8485461
            }
          }>
          <Marker key="marker_1"
            position={{
              lat: 40.7649462,
              lng: -111.8485461
            }}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBUpmcXlEuNg74zILHRZW5iwBkLMdgQn08"
})(MapPage)
{

}

