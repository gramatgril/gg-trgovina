import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import CategoryList from "./CategoryList";

const getCategories = graphql`
  query {
    categories: allContentfulKategorija {
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
  }
`;

const Category = () => {
  const { categories } = useStaticQuery(getCategories);

  return (
    <div>
      <CategoryList categories={categories.edges} />
    </div>
  );
};

export default Category;
