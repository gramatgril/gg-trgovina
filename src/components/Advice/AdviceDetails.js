import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Container } from "./../../styles";
import PrimaryButton from "../Button";

const propTypes = {
  advice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.shape({
      json: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
};

const AdviceDetails = ({ advice }) => {
  const { title, date, content } = advice;

  const options = {
    renderNode: {
      // Finds embedded images and displays them
      "embedded-asset-block": node => {
        return (
          <StyledImage>
            <img
              className="img"
              src={node.data.target.fields.file["en-US"].url}
              alt="single blog"
            />
          </StyledImage>
        );
      },
      // Finds linked Youtube links and creates player
      [INLINES.HYPERLINK]: node => {
        if (node.data.uri.includes("youtube.com/embed")) {
          return (
            <IframeContainer>
              <iframe
                title="Unique Title 002"
                src={node.data.uri}
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          );
          // Takes a hyperlink and displays it
        } else {
          return (
            <a className="hyperlink" href={node.data.uri}>
              {node.content[0].value}
            </a>
          );
        }
      },
    },
  };

  return (
    <Container>
      <Wrapper>
        <h1>{title}</h1>
        <h3>Objavljeno: {date}</h3>
        <StyledRichText>
          {documentToReactComponents(content.json, options)}
        </StyledRichText>
        <Link to="/nasveti-in-ideje" className="link">
          <PrimaryButton text="nazaj" />
        </Link>
      </Wrapper>
    </Container>
  );
};

AdviceDetails.propTypes = propTypes;

export default AdviceDetails;

const Wrapper = styled.div`
  h1 {
    margin: 1rem 0 3rem;
    text-align: center;
  }

  h3 {
    color: ${({ theme }) => theme.green};
    font-weight: 500;
  }
`;

const StyledImage = styled.div`
  height: auto;
  max-width: 500px;
  padding: 1rem 2rem;
`;

const StyledRichText = styled.article`
  margin: 2rem 0;

  h1 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    letter-spacing: 0.5px;
  }

  ol,
  ul {
    padding: 0.5rem 0;
    margin: 0 2rem;

    li {
      list-style-type: circle;
      padding: 0.3rem 0.5rem;
    }
  }

  .hyperlink {
    text-decoration: none;
    color: ${({ theme }) => theme.green};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const IframeContainer = styled.span`
  position: relative;
  display: block;
  height: 400px;
  width: 600px;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
