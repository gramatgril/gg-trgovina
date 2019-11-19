import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string,
  children: PropTypes.node
};

const Banner = ({ title, info, children }) => (
  <Wrapper>
    <h1>{title}</h1>
    <h3>{info}</h3>
    {children}
  </Wrapper>
);

Banner.propTypes = propTypes;

export default Banner;

const Wrapper = styled.div`
  /* Mobile */
  color: ${({ theme }) => theme.grey[100]};
  width: 100vw;
  margin: 0 auto;
  text-align: center;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.grey[900]};

  h1 {
    text-transform: uppercase;
    font-size: 1.25rem;
    margin: 0.25rem 0;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 1rem;
    line-height: 1.1;
    width: 90%;
    margin: 0.5rem auto;
    font-weight: 300;
  }

  /* Bigger than Iphone 5 sized */
  @media (min-width: 375px) {
    h1 {
      font-size: 1.5rem;
      margin: 1rem 0;
      letter-spacing: 4px;
    }

    h3 {
      line-height: 1.5;
      width: 90%;
      margin: 0.5rem auto;
      font-weight: 300;
    }
  }

  /* Pads and Desktop */
  @media (min-width: 768px) {
    width: 90vw;
    h1 {
      font-size: 3rem;
      margin: 1rem 0;
      letter-spacing: 6px;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 1rem auto;
    }
  }
  /* Very large */
  @media (min-width: 1200px) {
    width: 60vw;
  }
`;
