import React, { useState } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  ScaleControl,
} from "react-leaflet";
import styled from "styled-components";

const LeafletMap = () => {
  const [{ lat, lng, zoom }] = useState({
    lat: 45.95381,
    lng: 14.665879,
    zoom: 17,
  });

  const position = [lat, lng];

  if (typeof window !== "undefined") {
    return (
      <Wrapper>
        <Map center={position} zoom={zoom} className="map" zoomControl={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className="tile-layer"
          />
          <ZoomControl position="topright" />
          <ScaleControl position="bottomright" />
          <Marker position={position} className="marker">
            <Popup>Rožna Dolina 9</Popup>
          </Marker>
        </Map>
      </Wrapper>
    );
  }
  return null;
};

export default LeafletMap;

const Wrapper = styled.div`
  .map {
    height: 500px;
    width: 100%;
    margin: 0 auto;
  }

  .tile-layer {
    height: 100%;
    width: 100%;
  }

  .marker {
    transform: rotate(45deg);
  }

  .popup-image {
    font-size: 3rem;
  }
`;
