import React from "react";
import styled from "styled-components";

import CategoryCard from "./CategoryCard";
import Title from "./../Title";
import { styles } from "../../utils";

const CategoryList = ({ categories }) => {
  return (
    <CategoryListWrapper>
      <Title title="vse" subtitle="kategorije" />
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
  padding: 4rem 0;
  text-align: center;
  background: ${styles.colors.mainGrey};

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
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
