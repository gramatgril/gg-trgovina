import React from "react";
import styled from "styled-components";

import { styles } from "../../utils";
import AdviceCard from "./AdviceCard";

const AdviceList = ({ advices }) => {
  return (
    <AdviceListWrapper>
      <div className="center">
        {advices.map(({ node }) => (
          <AdviceCard advice={node} key={node.id} />
        ))}
      </div>
    </AdviceListWrapper>
  );
};

const AdviceListWrapper = styled.div`
  padding: 0.5rem 0;
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
