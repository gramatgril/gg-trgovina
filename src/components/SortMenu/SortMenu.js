import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { links } from '../../styles';
import { types } from '../../utils';
import SearchBar from './SearchBar';

const { INPUT_CHANGE, SEARCH_PRODUCTS, SHOW_PROMOTED } = types;

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchInput: PropTypes.string,
  promo: PropTypes.bool // If promo prop is supplied, component doesn't display Akcija link
};

const SortMenu = ({ dispatch, searchInput, promo }) => {
  const [menuLinks, setMenuLinks] = useState(links.sortMenuLinks);
  // ListHeight changes depending on wether user is on Akcija page or not

  // Check if component is on Akcija page and remove sort by promoted
  useEffect(() => {
    promo && setMenuLinks(menuLinks.filter(link => link.action !== SHOW_PROMOTED));
  }, []);

  const handleClickLink = (id, action) => {
    // Makes link active
    setMenuLinks(menuLinks.map(link => (link.id === id ? { ...link, active: true } : { ...link, active: false })));

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
    <Wrapper>
      <SortLinks>
        {menuLinks.map(({ id, name, active, action }) => (
          <SortButton key={id} active={active} onClick={() => handleClickLink(id, action)}>
            <p>{name}</p>
          </SortButton>
        ))}
      </SortLinks>
      <SearchBar handleInputChange={handleInputChange} productSearch={productSearch} searchInput={searchInput} />
    </Wrapper>
  );
};

SortMenu.propTypes = propTypes;

export default SortMenu;

const MenuTitle = styled.div``;
const SortLinks = styled.ul``;
const SortButton = styled.li`
  &:after {
    background: ${({ active, theme }) => (active ? `${theme.primary[300]}` : `${theme.grey[100]}`)};
  }
`;

const Wrapper = styled.div`
  /* === MOBILE === */
  width: 90vw;
  margin: 2rem auto 0;
  padding: 0.5rem 0 1rem;
  border-radius: 15px;
  flex-direction: column-reverse;
  background: ${({ theme }) => theme.grey[100]};

  ${SortLinks} {
    margin: 0.5rem 0 0;
    color: ${({ theme }) => theme.grey[300]};
  }

  ${SortButton} {
    cursor: pointer;
    padding: 0 2rem;

    p {
      margin: 0;
      font-weight: 500;
    }
  }

  /* === DESKTOP === */
  @media (min-width: 900px) {
    transition: ${({ theme }) => theme.easeInOut};
    margin: 3rem auto 0;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
    flex-direction: row;
    padding: 0;

    ${MenuTitle} {
      display: none;
    }

    ${SortLinks} {
      display: flex;
      margin: 0.5rem 0 0 1rem;
    }

    ${SortButton} {
      width: auto;
      padding: 0;
      white-space: nowrap;

      p {
        padding: 0 0.5rem;
      }

      /* Active bar under the link */
      &:after {
        content: '';
        display: block;
        border-radius: 4px;
        height: 2px;
        width: 80%;
        margin: 0 auto;
      }

      &:hover {
        color: ${({ theme }) => theme.primary[500]};
      }
    }
  }

  @media (min-width: 1200px) {
    width: 60vw;
  }
`;
