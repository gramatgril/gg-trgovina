import React from "react";
import styled from "styled-components";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "gatsby";

import { PrimaryButton } from "../Button";
import { styles } from "../../utils";

const AdviceDetails = ({ advice }) => {
  const { title, publishDate, content } = advice;

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div className="image">
            <img
              width="600"
              src={node.data.target.fields.file["en-US"].url}
              alt="single blog"
            />
          </div>
        );
      },
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
    <AdviceDetailsWrapper>
      <div className="center">
        <h1>{title}</h1>
        <h4>Objavljeno : {publishDate}</h4>
        <article className="post">
          {documentToReactComponents(content.json, options)}
        </article>

        <Link to="/nasveti" className="link">
          <PrimaryButton text="nazaj" />
        </Link>
      </div>
    </AdviceDetailsWrapper>
  );
};

const AdviceDetailsWrapper = styled.div`
  padding: 4rem 0;

  .image {
    padding: 2rem 0;
  }

  .center {
    width: 80vw;
    margin: 0 auto;
  }

  h1,
  h4 {
    text-transform: capitalize;
    padding: 1rem 0;
    margin: 2rem 0;
    text-transform: uppercase;
    letter-spacing: ${styles.letterSpacing};
    margin-bottom: 1rem;
  }
  .post {
    margin: 2rem 0;
  }
  .post img {
    max-width: 70vw;
  }
`;

const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export default AdviceDetails;
