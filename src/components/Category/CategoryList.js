import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CategoryCard from "./CategoryCard";

//* List of all categories. Last card is always Advice("Nasveti in ideje"). Clicking on a card links to single-category-template.

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

const CategoryList = ({ categories, adviceCardImg }) => (
  <Wrapper>
    <StyledCategoryGallery>
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
    </StyledCategoryGallery>
  </Wrapper>
);

CategoryList.propTypes = propTypes;

export default CategoryList;

const Wrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
`;

const StyledCategoryGallery = styled.div`
  /* Mobile */
  width: 90vw;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 0.2rem;
  grid-row-gap: 0.2rem;

  /* Desktop */
  @media (min-width: 576px) {
    margin: 3rem auto;
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
  }

  @media (min-width: 1200px) {
    width: 100%;
    max-width: 1170px;
  }
`;
