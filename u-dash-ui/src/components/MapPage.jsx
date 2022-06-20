import * as React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import { Component } from 'react';


class MapPage extends React.Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "80%", height: "80%" }}
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

