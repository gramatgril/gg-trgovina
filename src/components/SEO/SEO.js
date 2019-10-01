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

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle: title
            siteDesc: description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const { image, siteUrl, siteTitle, siteDesc } = site.siteMetadata;
  const metaDescription = description || siteDesc;
  const metaTitle = title || siteTitle;
  // const metaImage = `${siteUrl}${image}`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${siteTitle}`}
      // meta={[
      //   {
      //     name: `description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:title`,
      //     content: metaTitle,
      //   },
      //   {
      //     property: `og:description`,
      //     content: metaDescription,
      //   },
      //   {
      //     property: `og:type`,
      //     content: `website`,
      //   },
      //   {
      //     property: `og:image`,
      //     content: metaImage,
      //   },
      // ].concat(meta)}
    >
      <meta name="description" content={metaDescription} />
      <meta name="image" content={image} />
      {/* Facebook card */}
      <meta name="og:url" content={siteUrl} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:image" content={`${siteUrl}${image}`} />
      <meta name="og:image:width" content="400" />
      <meta name="og:image:height" content="300" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = propTypes;

export default SEO;
