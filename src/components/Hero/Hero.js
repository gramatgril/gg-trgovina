import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

const propTypes = {
  img: PropTypes.object.isRequired,
  children: PropTypes.node,
};

const Hero = ({ img, className, children }) => {
  return (
    <BackgroundImage className={className} fluid={img}>
      {children}
    </BackgroundImage>
  );
};

export default styled(Hero)`
  height: 40vh;
  background: none;
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Hero.propTypes = propTypes;
