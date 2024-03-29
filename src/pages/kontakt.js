import React from 'react';
import { graphql } from 'gatsby';

import Contact from './../components/Contact';
import Hero from '../components/Hero';
import Layout from './../styles/layout';
import SEO from './../components/seo';
import Banner from '../components/Banner';

export default ({ data }) => {
  const heroImg = data.heroImg.image.fluid;
  const { companyInfo, contactInfo } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="Kontakt" />
      <Hero img={heroImg}>
        <Banner
          title="kontakt"
          info="Vas zanima kje se nahajamo? Potrebujete več informacij o nas in naši ponudbi? Spodaj nam lahko pošljete sporočilo ali povpraševanje. Prav tako bomo veseli vaših predlogov, pripomb ali mnenj. "
        />
      </Hero>
      <Contact companyInfo={companyInfo} contactInfo={contactInfo} />
    </Layout>
  );
};

export const query = graphql`
  query {
    heroImg: file(relativePath: { eq: "contactBcg.jpg" }) {
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
          companyId
          vatId
          companyDesc
          street
          city
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
