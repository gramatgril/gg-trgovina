import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import AdviceCard from "./AdviceCard";
import Title from "../Title";
import { PrimaryButton } from "../Button";

import { styles } from "../../utils";

const propTypes = {
  embed: PropTypes.bool.isRequired,
};

const getAllAdvice = graphql`
  {
    allAdvices: allContentfulNasvetiInIdeje {
      edges {
        node {
          id: contentful_id
          title
          date(formatString: "D. M. YYYY")
          slug
          shortDesc
          image {
            fluid(maxWidth: 300, maxHeight: 200) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

// If prop <embed> is supplied, component is being embeded into some other component.
// Number of items is limited to 3 and title is displayed
const Advice = ({ embed }) => {
  const { allAdvices } = useStaticQuery(getAllAdvice);

  const advices = embed
    ? allAdvices.edges.filter((item, i) => i < 3)
    : allAdvices.edges;

  return (
    <Wrapper embed={embed}>
      <div className="center">
        {embed && <Title title="Nasveti" subtitle="in ideje" />}
        {advices.map(({ node }) => (
          <AdviceCard advice={node} key={node.id} />
        ))}
        {embed && (
          <Link to="nasveti-in-ideje">
            <PrimaryButton text="vsi nasveti in ideje" />
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  background: ${props =>
    props.embed ? `${styles.colors.offWhite}` : `${styles.colors.white}`};
  text-align: center;

  .center {
    padding: 3rem 0.6rem;
    margin: 0 auto;
  }

  @media (min-width: 576px) {
    .center {
      width: 80vw;
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 60vw;
      max-width: 1170px;
    }
  }
`;

Advice.propTypes = propTypes;

export default Advice;
