require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gramat Gril`,
    description: `Opis Strani`,
    author: `@praecorloth`,
    information: {
      company: `Gramat Gril d.o.o.`,
      street: `Rozna dolina 9`,
      city: `1290 Grosuplje`,
      copyright: `2010-2019 GRAMAT GRIL | Prodaja gradbenega materiala, kopalniške opreme`,
    },
    contactInfo: {
      phone: `+386 1 786 33 64`,
      mail: `info@gramat-gril.si`,
    },
    image: "/defaultBcg.jpg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
  ],
};
