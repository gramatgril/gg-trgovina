import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

const Banner = ({ title, info, children }) => {
  return (
    <BannerWrapper>
      <h1>{title}</h1>
      <p>{info}</p>
      {children}
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  padding-top: 2rem;
  text-align: center;
  letter-spacing: ${styles.letterSpacing};
  color: ${styles.colors.grey};
  background: ${styles.colors.white};

  h1 {
    opacity: 1;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 9px;
  }

  p {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .banner h1 {
      font-size: 4.5rem;
    }
    .banner p {
      width: 70%;
    }
  }
`;
export default Banner;
