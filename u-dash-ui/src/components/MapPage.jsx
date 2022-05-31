import * as React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'

import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import { Component } from 'react';


class MapPage extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        initialCenter={
          {
            lat: 28.7,
            lng: 77.10
          }
        }
      />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "ASK ZYAD FOR API TOKEN :P"  
}) (MapPage)
{

}

