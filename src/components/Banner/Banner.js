import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  children: PropTypes.node,
};

const Banner = ({ title, info, children }) => (
  <Wrapper>
    <h1>{title}</h1>
    <p>{info}</p>
    {children}
  </Wrapper>
);

Banner.propTypes = propTypes;

export default Banner;

const Wrapper = styled.div`
  /* Mobile */
  background: rgba(33, 33, 33, 0.2);
  color: ${({ theme }) => theme.white};
  margin: 0 auto;
  padding-top: 0.5rem;
  text-align: center;
  position: absolute;
  bottom: 10%;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.black};

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0.5rem 0;
    letter-spacing: 4px;
  }

  p {
    font-size: 0.9rem;
    letter-spacing: 1px;
    width: 85%;
    margin: 0.5rem auto;
  }

  /* Desktop */
  @media (min-width: 768px) {
    width: 80vw;

    h1 {
      font-size: 2.5rem;
      margin: 1rem 0;
      letter-spacing: 6px;
    }

    p {
      font-size: 1.2rem;
      letter-spacing: 1.2px;
      margin: 1rem auto;
    }
  }
`;
