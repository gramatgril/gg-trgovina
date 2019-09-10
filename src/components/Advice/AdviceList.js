import React from "react";
import styled from "styled-components";

import AdviceCard from "./AdviceCard";

const AdviceList = ({ advices }) => {
  return (
    <Wrapper>
      <div className="center">
        {advices.map(({ node }) => (
          <AdviceCard advice={node} key={node.id} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;

  @media (min-width: 576px) {
    .center {
      width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`;

export default AdviceList;
