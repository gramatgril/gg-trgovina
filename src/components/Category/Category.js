import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import CategoryList from "./CategoryList";

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
    <div>
      <CategoryList
        categories={categories.edges}
        adviceCardImg={adviceCardImg.image}
      />
    </div>
  );
};

export default Category;
