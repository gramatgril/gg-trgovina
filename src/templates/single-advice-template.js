import React from "react";
import { graphql } from "gatsby";

import Layout from "../styles/layout";

import SEO from "../components/seo";
import { AdviceDetails } from "./../components/Advice";

export default ({ data }) => {
  const { title } = data.advice;

  return (
    <Layout>
      <SEO title={title} />
      <AdviceDetails advice={data.advice} />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    advice: contentfulNasvetiInIdeje(contentful_id: { eq: $id }) {
      title
      date(formatString: "D. M. YYYY")
      content {
        json
      }
    }
  }
`;
