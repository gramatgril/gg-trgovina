import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
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
        <Map center={position} zoom={zoom}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>Gramat Gril, Rožna dolina 9</Popup>
          </Marker>
        </Map>
      </Wrapper>
    );
  }
  return null;
};

export default LeafletMap;

const Wrapper = styled.div`
  height: 600px;
`;
