import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const propTypes = {
  description: PropTypes.shape({
    json: PropTypes.object.isRequired,
  }).isRequired,
};

const Description = ({ description }) => (
  <Wrapper>{documentToReactComponents(description.json)}</Wrapper>
);

Description.propTypes = propTypes;

export default Description;

const Wrapper = styled.article`
  text-align: left;
  margin-top: 0.5rem;

  .description-title {
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 0 0 1rem 1rem;
  }

  p {
    padding: 0.5rem 1rem;
  }

  h4 {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    font-weight: 500;
    margin: 0;
  }

  ul,
  ol {
    margin: 0 2.5rem;
    li {
      list-style-type: circle;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`;
