import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

// export default class LeafletMap extends Component {
//   state = {
//     lat: 45.95381,
//     lng: 14.665879,
//     zoom: 17,
//   };

//   render() {
//     const position = [this.state.lat, this.state.lng];
//     return (
//       <StyledMap center={position} zoom={this.state.zoom}>
//         <TileLayer
//           attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>Gramat Gril, Rožna dolina 9</Popup>
//         </Marker>
//       </StyledMap>
//     );
//   }
// }

const LeafletMap = () => {
  const [{ lat, lng, zoom }] = useState({
    lat: 45.95381,
    lng: 14.665879,
    zoom: 17,
  });

  const position = [lat, lng];

  if (typeof window !== "undefined") {
    return (
      <StyledMap center={position} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Gramat Gril, Rožna dolina 9</Popup>
        </Marker>
      </StyledMap>
    );
  }
  return null;
};

export default LeafletMap;

const StyledMap = styled(Map)`
  height: 600px;
`;
