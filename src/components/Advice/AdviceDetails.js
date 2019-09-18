import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles } from "../../utils";

import PrimaryButton from "../Button";
import { Container } from "./../../utils";

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
          <div>
            <img
              className="img"
              src={node.data.target.fields.file["en-US"].url}
              alt="single blog"
            />
          </div>
        );
      },
      // Finds linked Youtube and Vimeo links and creates player
      [INLINES.HYPERLINK]: node => {
        if (node.data.uri.includes("player.vimeo.com/video")) {
          return (
            <IframeContainer>
              <iframe
                title="Unique Title 001"
                src={node.data.uri}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          );
        } else if (node.data.uri.includes("youtube.com/embed")) {
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
        }
      },
    },
  };

  return (
    <StyledContainer>
      <h1>{title}</h1>
      <h4>Objavljeno : {date}</h4>
      <div className="post">
        {documentToReactComponents(content.json, options)}
      </div>
      <Link to="/nasveti-in-ideje" className="link">
        <PrimaryButton text="nazaj" />
      </Link>
    </StyledContainer>
  );
};

AdviceDetails.propTypes = propTypes;

export default AdviceDetails;

const StyledContainer = styled(Container)`
  .img {
    padding: 1rem;
    height: 400px;
  }

  h1,
  h4 {
    text-transform: capitalize;
    margin: 2rem 0;
    letter-spacing: ${styles.letterSpacing};
    margin-bottom: 1rem;
  }

  .post {
    margin: 2rem 0;
  }

  .post img {
    max-width: 70vw;
  }

  li {
    list-style-type: none;
  }
`;

const IframeContainer = styled.span`
  /* padding-bottom: 56.25%; */
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
