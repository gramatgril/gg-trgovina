import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaSearch, FaFilter } from "react-icons/fa";

import { styles, links } from "../../styles";
import { types } from "../../utils";

const { INPUT_CHANGE, SEARCH_PRODUCTS, SHOW_PROMOTED } = types;

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchInput: PropTypes.string,
  promo: PropTypes.bool, // If promo prop is supplied, component doesn't display Akcija link
};

const SortMenu = ({ dispatch, searchInput, promo }) => {
  const [menuLinks, setMenuLinks] = useState(links.sortMenuLinks);
  const [isMenuOpen, setMenuOpen] = useState(false);
  // ListHeight changes depending on whether user is on Akcija page or not
  const listHeight = promo ? "150" : "180";

  // Check if component is on Akcija page and remove sort by promoted
  useEffect(() => {
    promo && setMenuLinks(menuLinks.filter(l => l.action !== SHOW_PROMOTED));
  }, []);

  const handleClickLink = (id, action) => {
    // Makes link active
    setMenuLinks(
      menuLinks.map(link =>
        link.id === id ? { ...link, active: true } : { ...link, active: false }
      )
    );

    // Every menu link has an action constant that is passed to the reducer
    dispatch({ type: action });
  };

  const handleInputChange = e => {
    dispatch({ type: INPUT_CHANGE, searchInput: e.target.value });
  };

  const productSearch = e => {
    e.preventDefault();
    dispatch({ type: SEARCH_PRODUCTS });
  };

  return (
    <Wrapper isMenuOpen={isMenuOpen} listHeight={listHeight}>
      <div onClick={() => setMenuOpen(!isMenuOpen)} className="menu-toggle">
        <FaFilter className="icon" />
        <h4>Filtri in iskanje</h4>
      </div>

      <StyledLinks>
        {menuLinks.map(({ name, id, active, action }) => (
          <StyledSortLink
            key={id}
            active={active}
            onClick={() => handleClickLink(id, action)}
          >
            <h4>{name}</h4>
            <div className="active-bar" />
          </StyledSortLink>
        ))}
      </StyledLinks>
      <StyledForm onSubmit={productSearch}>
        <input
          placeholder="Iskanje"
          type="text"
          onChange={handleInputChange}
          value={searchInput}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </StyledForm>
    </Wrapper>
  );
};

SortMenu.propTypes = propTypes;

export default SortMenu;

const Wrapper = styled.ul`
  /* Mobile */
  height: ${({ isMenuOpen, listHeight }) =>
    isMenuOpen ? `${listHeight}px` : "30px"};
  overflow: hidden;
  width: 90vw;
  transition: ${styles.easeInOut};
  margin: 3rem auto 0;
  border-bottom: 1px solid ${styles.colors.grey};

  .menu-toggle {
    padding: 0 0.4rem;
    display: flex;
    justify-content: start;
    cursor: pointer;

    h4 {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .icon {
      color: ${styles.colors.green};
      margin: 0.35rem 0.5rem 0 0;
    }
  }

  /* Desktop */
  @media (min-width: 768px) {
    transition: ${styles.easeInOut};
    margin: 3rem auto 0;
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    width: 70vw;

    .menu-toggle {
      display: none;
    }
  }

  @media (min-width: 1200px) {
    width: 60vw;
  }
`;

const StyledSortLink = styled.li`
  /* Mobile */
  cursor: pointer;
  padding: 0.2rem 2rem;
  color: ${({ active }) =>
    active ? `${styles.colors.green}` : `${styles.colors.black}`};

  .active-bar {
    height: 2px;
  }

  h4 {
    margin: 0;
    font-weight: 500;
  }

  /* Desktop */
  @media (min-width: 768px) {
    width: auto;
    padding: 0;

    h4 {
      padding: 0 0.4rem;
      margin-bottom: 0.2rem;
    }
    :hover {
      .active-bar {
        background: ${styles.colors.green};
      }
    }
  }
`;

const StyledLinks = styled.ul`
  margin: 0.5rem 0 0;
  /* Desktop */
  @media (min-width: 768px) {
    display: flex;
  }
`;

const StyledForm = styled.form`
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;

  input,
  button {
    border: none;
    background: none;
    font-size: 1.2rem;
    color: ${styles.colors.black};
  }

  input {
    width: 100%;
    border-bottom: 1px solid ${styles.colors.green};

    :focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
    color: ${styles.colors.green};
  }

  /* Desktop */
  @media (min-width: 768px) {
    width: auto;
    padding: 0;
  }
`;
