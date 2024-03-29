import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        image
        siteUrl
      }
    }
  }
`;

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(getData);

  const { image, siteUrl, siteTitle, siteDesc } = site.siteMetadata;

  return (
    <Helmet htmlAttributes={{ lang: "sl" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* Facebook card */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  );
}

SEO.defaultProps = {
  title: `Gramat Gril`,
  lang: `sl`,
  description: ``,
};

SEO.propTypes = propTypes;

export default SEO;
