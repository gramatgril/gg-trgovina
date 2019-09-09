import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import AdviceList from "./AdviceList";
import Title from "../Title";

const getAllAdvice = graphql`
  {
    advices: allContentfulNasvetiInIdeje {
      edges {
        node {
          id: contentful_id
          title
          publishDate(formatString: "D. M. YYYY")
          slug
          shortDesc
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

// Prop <title> toggles if Advice list shows title component..
const Advice = ({ title }) => {
  const { advices } = useStaticQuery(getAllAdvice);

  return (
    <AdviceWrapper>
      <div className="center">
        {title && <Title title="Nasveti" subtitle="in ideje" />}
        <AdviceList advices={advices.edges} />
      </div>
    </AdviceWrapper>
  );
};

const AdviceWrapper = styled.div`
  padding: 1rem 0;

  .center {
    padding: 1rem 1rem;
    margin: 0 auto;
  }

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

export default Advice;
