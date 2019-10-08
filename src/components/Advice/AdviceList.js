import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { styles, Container } from "../../styles";
import AdviceCard from "./AdviceCard";
import PrimaryButton from "../Button";
import Title from "../Title";

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
// Since component stretches whole width, Container is not parent div, but instead its

const AdviceList = ({ embed }) => {
  const { allAdvices } = useStaticQuery(getAllAdvice);

  const advices = embed
    ? allAdvices.edges.filter((item, i) => i < 3)
    : allAdvices.edges;

  return (
    <Wrapper embed={embed}>
      <Container align="center">
        {embed && <Title title="Nasveti" subtitle="in ideje" />}
        <StyledAdviceGrid>
          {advices.map(({ node }) => (
            <AdviceCard advice={node} key={node.id} />
          ))}
        </StyledAdviceGrid>
        {embed && (
          <Link to="/nasveti-in-ideje" className="link">
            <PrimaryButton text="vsi nasveti in ideje" />
          </Link>
        )}
      </Container>
    </Wrapper>
  );
};

AdviceList.propTypes = propTypes;

export default AdviceList;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  padding: 3rem 0;
  background: ${({ embed }) =>
    embed ? `${styles.colors.offWhite}` : `${styles.colors.white}`};
`;

const StyledAdviceGrid = styled.div`
  padding: 3rem 0;
`;
