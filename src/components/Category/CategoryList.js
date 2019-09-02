import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <CategoryListWrapper>
      <div className="center">
        {categories.map(({ node }) => (
          <CategoryCard
            key={node.id}
            title={node.title}
            slug={node.slug}
            image={node.image}
          />
        ))}
      </div>
    </CategoryListWrapper>
  );
};

const CategoryListWrapper = styled.div`
  padding: 2rem 0;
  text-align: center;

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-template-columns: 8ch auto;
    grid-column-gap: 1.5rem;
    grid-row-gap: 1.5rem;
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

export default CategoryList;
