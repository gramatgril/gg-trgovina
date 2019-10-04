import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";

import CategoryList from "./CategoryList";

//* Container for the list of categories. Rendered on the index page. Fetches all categories and image for Advice("Nasveti in ideje") card.

const getCategories = graphql`
  query {
    categories: allContentfulKategorija(sort: { fields: title, order: ASC }) {
      edges {
        node {
          id: contentful_id
          title
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    # Image for "Nasveti in ideje" section
    adviceCardImg: file(relativePath: { eq: "nasveti.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Category = () => {
  const { categories, adviceCardImg } = useStaticQuery(getCategories);

  return (
    <Fragment>
      <CategoryList
        categories={categories.edges}
        adviceCardImg={adviceCardImg.image}
      />
    </Fragment>
  );
};

export default Category;
