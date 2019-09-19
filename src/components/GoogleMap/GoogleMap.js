import React from "react";
import styled from "styled-components";

const GoogleMap = () => {
  return (
    <Wrapper>
      <div id="canvasfor-googlemap" className="canvas">
        <iframe
          className="map"
          title="map"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?q=Rožna+dolina+9+grosuplje&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default GoogleMap;

const Wrapper = styled.div`
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  height: 400px;

  .canvas {
    height: 100%;
    width: 100%;
    max-width: 100%;
  }
  .map {
    height: 100%;
    width: 100%;
    border: 0;
  }
`;
