import React from "react";
import { graphql } from "gatsby";

import Hero from "../components/Hero";
import Layout from "./../components/layout";
import SEO from "./../components/seo";
import About from "../components/About/About.js";

export default ({ data }) => {
  const { companyInfo, contactInfo } = data.site.siteMetadata;
  const heroImg = data.heroImg.image.fluid;

  return (
    <Layout>
      <SEO title="O nas" />
      <Hero img={heroImg} />
      <About companyInfo={companyInfo} contactInfo={contactInfo} />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "infoBcg.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        companyInfo {
          nameLong
          nameShort
          address
          ceo
          companyId
          vatId
          companyDesc
        }
        contactInfo {
          phone
          fax
          web
          mail
        }
      }
    }
  }
`;
