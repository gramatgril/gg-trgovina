import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CategoryCard from "./CategoryCard";

const propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        image: PropTypes.shape({
          fluid: PropTypes.object.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

const CategoryList = ({ categories, adviceCardImg }) => {
  return (
    <StyledCategoryList>
      <div className="center">
        {categories.map(({ node }) => (
          <CategoryCard
            key={node.id}
            title={node.title}
            slug={node.slug}
            image={node.image}
          />
        ))}
        <CategoryCard
          key="nasveti"
          title="Nasveti in ideje"
          slug="nasveti-in-ideje"
          image={adviceCardImg}
        />
      </div>
    </StyledCategoryList>
  );
};

const StyledCategoryList = styled.div`
  padding: 4rem 0;
  text-align: center;

  .center {
    width: 90vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 0.2rem;
    grid-row-gap: 0.2rem;
  }

  @media (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`;

CategoryList.propTypes = propTypes;

export default CategoryList;
