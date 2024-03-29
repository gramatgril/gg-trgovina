require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
var proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: `Trgovina z gradbenim materialom`,
    description: `Barve, fasade, keramika, talne obloge, kopalnice, vse za vrt in okolico. Najdete nas v Rožni dolini 9 v Grosuplju.`,
    author: `@praecorloth`,
    siteUrl: `https://trgovina-gramat-gril.si`,
    image: '/defaultBcg.jpg',
    icon: '/favicon.ico',
    companyInfo: {
      nameLong: `Proizvodnja, transport in trgovina gradbenega materiala Gramat Gril d.o.o.`,
      nameShort: `GRAMAT GRIL d.o.o.`,
      description: `Proizvodnja, transport in trgovina gradbenega materiala`,
      name: `Gramat Gril d.o.o.`,
      street: `Rožna dolina 9`,
      city: `1290 Grosuplje`,
      address: `Rožna dolina 9, 1290 Grosuplje`,
      ceo: `Peter Gril`,
      companyId: `5292263000`,
      vatId: `SI88496473`,
      copyright: `2010-2020 GRAMAT GRIL d.o.o. | Vse pravice zadržane`,
      companyDesc: ` Tradicija podjetništva v družini Gril sega v leto 1967. Takrat sta
      Ana in August Gril odprla obrtno delavnico za izdelavo cementnih
      izdelkov. Leta 1989 sta jo reorganizirala v podjetje GRAMAT GRIL
      d.o.o. ter odprla trgovino z gradbenim materialom in keramiko. Leta
      2009 je podjetje prevzel sin Peter Gril. Danes gradbeni oddelek ter
      salon keramike in kopalniške opreme na 700m2 svojim kupcem nudi
      celovito ponudbo materiala za kopalnice.`
    },
    contactInfo: {
      phone: `+386 1 786 33 63`,
      phoneSecondary: `+386 7 306 56 95`,
      fax: `+386 1 786 44 64`,
      mail: `info@gramat-gril.si`,
      web: `www.gramat-gril.si`,
      stilUrl: `https://gramat-gril.si/`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://trgovina-gramat-gril.si/`,
        sitemap: `https://trgovina-gramat-gril.si/sitemap.xml`,
        env: {
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true
        // anonymize: true
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gramat Gril`,
        short_name: `Gramat Gril`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#8db600`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
        include_favicon: false
      }
    }
    // `gatsby-plugin-offline`
  ],

  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    );
  }
};
