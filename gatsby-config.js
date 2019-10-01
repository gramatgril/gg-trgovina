require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Trgovina z gradbenim materialom`,
    description: `Trgovina z gradbenim materialom in salon kopalniške opreme Gramat Gril v Grosuplju.`,
    author: `@praecorloth`,
    siteUrl: `https://ggtrgovina.netlify.com`,
    image: `/defaultBcg.jpg`,
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
      copyright: `2010-2019 GRAMAT GRIL d.o.o. | Vse pravice zadržane`,
      companyDesc: ` Tradicija podjetništva v družini Gril sega v leto 1967. Takrat sta
      Ana in August Gril odprla obrtno delavnico za izdelavo cementnih
      izdelkov. Leta 1989 sta jo reorganizirala v podjetje GRAMAT GRIL
      d.o.o. ter odprla trgovino z gradbenim materialom in keramiko. Leta
      2009 je podjetje prevzel sin Peter Gril. Danes gradbeni oddelek ter
      salon keramike in kopalniške opreme na 700m2 svojim kupcem nudi
      celovito ponudbo materiala za kopalnice.`,
    },
    contactInfo: {
      phone: `+386 1 786 33 63`,
      fax: `+386 1 786 44 64`,
      mail: `info@gramat-gril.si`,
      web: `www.gramat-gril.si`,
      stilUrl: `https://gramat-gril.si/`,
    },
    presentation: {
      gramatTitle: `Trgovina z gradbenim materialom`,
      stilTitle: `Salon keramičnih ploščic STIL`,
      gramatText: `Tradicija podjetništva v družini Gril sega v leto 1967. Takrat sta
      Ana in August Gril odprla obrtno delavnico za izdelavo cementnih
      izdelkov. Leta 1989 sta jo reorganizirala v podjetje GRAMAT GRIL
      d.o.o. ter odprla trgovino z gradbenim materialom in keramiko. Leta
      2009 je podjetje prevzel sin Peter Gril. Danes gradbeni oddelek ter
      salon keramike in kopalniške opreme na 700m2 svojim kupcem nudi
      celovito ponudbo materiala za kopalnice.`,
      stilText: `V našem salonu keramike STIL by Gramat Gril nudimo široko izbiro
      keramičnih ploščic, sanitarne keramike, armatur, tuš kabin,
      kopalniškega pohištva in ostale kopalniške opreme. Zastopamo
      številne priznane italijanske proizvajalce keramičnih ploščic
      srednjega in višjega cenovnega razreda, ki si jih lahko v živo
      ogledate v našem salonu. Del vsake kopalnice je tudi sanitarna
      keramika: wc školjka, umivalnik, tuš kad in kopalna kad.`,
    },
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://ggtrgovina.netlify.com/`,
        sitemap: `https://ggtrgovina.netlify.com//sitemap.xml`,
        env: {
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // head: true,
        // anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        // head: true,
        // anonymize: true,
      },
    },
  ],
};
