import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: ${styles.colors.green};
  }

  .title {
    color: ${styles.colors.grey};
  }

  span {
    display: block;
  }

  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`;

export default Title;
