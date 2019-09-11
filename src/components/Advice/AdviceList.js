import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AdviceCard from "./AdviceCard";

const propTypes = {
  advices: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        publishDate: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        shortDesc: PropTypes.string.isRequired,
        image: PropTypes.shape({
          fluid: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

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

AdviceList.propTypes = propTypes;

export default AdviceList;
