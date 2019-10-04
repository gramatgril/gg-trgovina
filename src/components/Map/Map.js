import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 45.95381, lng: 14.665879 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 45.95381, lng: 14.665879 }} />
      )}
    </GoogleMap>
  ))
);

export default Map;
