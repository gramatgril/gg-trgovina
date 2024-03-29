import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Container } from '../../styles';
import AdviceCard from './AdviceCard';
import PrimaryButton from '../Button';
import Title from '../Title';

const propTypes = {
  embed: PropTypes.bool.isRequired
};

const getAllAdvice = graphql`
  {
    allAdvices: allContentfulNasvetiInIdeje(sort: { fields: date, order: DESC }) {
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

const AdviceList = ({ embed }) => {
  const { allAdvices } = useStaticQuery(getAllAdvice);

  const advices = embed ? allAdvices.edges.filter((_, i) => i < 3) : allAdvices.edges;

  return (
    <Wrapper embed={embed}>
      <Container align="center">
        {embed && <Title title="Nasveti" subtitle="in ideje" />}
        <StyledAdviceGrid>
          {advices.map(({ node }) => (
            <AdviceCard advice={node} key={node.id} />
          ))}
        </StyledAdviceGrid>
        {embed ? (
          <Link to="/nasveti-in-ideje" className="link">
            <PrimaryButton text="vsi nasveti in ideje" />
          </Link>
        ) : (
          <Link to="/" className="link">
            <PrimaryButton text="domov" />
          </Link>
        )}
      </Container>
    </Wrapper>
  );
};

AdviceList.propTypes = propTypes;

export default AdviceList;

const StyledAdviceGrid = styled.div``;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 2rem 0 4rem;
  background: ${({ embed, theme }) => (embed ? `${theme.white}` : `${theme.white}`)};

  ${StyledAdviceGrid} {
    padding: 0 0 3rem;
  }
`;
