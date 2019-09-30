import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaSearch, FaFilter } from "react-icons/fa";

import { styles, links } from "../../styles";
import { types } from "../../utils";
import { SHOW_PROMOTED } from "../../utils/constants";

const { INPUT_CHANGE, SEARCH_PRODUCTS } = types;

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchInput: PropTypes.string,
  promo: PropTypes.bool, // If promo prop is supplied, component doesn't display Akcija link
};

const SortMenu = ({ dispatch, searchInput, promo }) => {
  const [menuLinks, setMenuLinks] = useState(links.sortMenuLinks);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Check if component is on Akcija page
  useEffect(() => {
    promo && setMenuLinks(menuLinks.filter(l => l.action !== SHOW_PROMOTED));
  }, []);

  const handleClickLink = (id, action) => {
    // Makes link active
    setMenuLinks(
      menuLinks.map(link =>
        link.id === id
          ? {
              ...link,
              active: true,
            }
          : {
              ...link,
              active: false,
            }
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
    <Wrapper isMenuOpen={isMenuOpen}>
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

const Wrapper = styled.div`
  /* Mobile */
  height: ${({ isMenuOpen }) => (isMenuOpen ? "200px" : "30px")};
  overflow: hidden;
  width: 90vw;
  margin: 0 auto;
  transition: ${styles.easeInOut};
  background: ${styles.colors.offWhite};

  .menu-toggle {
    padding: 0 0.4rem;
    display: flex;
    justify-content: start;
    cursor: pointer;
    color: ${styles.colors.grey};

    h4 {
      font-size: 1.2rem;
    }

    .icon {
      margin: 0.25rem 0.5rem 0 0;
    }
  }

  /* Desktop */
  @media (min-width: 768px) {
    height: auto;
    align-items: center;
    display: flex;
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

const StyledLinks = styled.ul`
  /* Mobile */

  /* Desktop */
  @media (min-width: 768px) {
    height: auto;
    display: flex;
  }

  @media (min-width: 1200px) {
  }
`;

const StyledSortLink = styled.li`
  cursor: pointer;
  padding: 0.2rem 0;
  color: ${({ active }) =>
    active ? `${styles.colors.green}` : `${styles.colors.black}`};

  .active-bar {
    height: 2px;
  }

  h4 {
    margin: 0;
    padding: 0 0.5rem;
  }

  /* Desktop */
  @media (min-width: 768px) {
    width: auto;

    :hover {
      .active-bar {
        background: ${styles.colors.green};
      }
    }
  }
`;

const StyledForm = styled.form`
  padding: 1rem 0.5rem;
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
  }

  button {
    padding: 0 1rem;
    cursor: pointer;
  }

  /* Desktop */
  @media (min-width: 768px) {
    width: auto;
  }
`;
