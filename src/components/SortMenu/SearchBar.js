import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  productSearch: PropTypes.func.isRequired,
  searchInput: PropTypes.string
};

const SearchBar = ({ handleInputChange, searchInput, productSearch }) => {
  return (
    <Wrapper onSubmit={productSearch}>
      <SearchTerm
        aria-label="iskanje"
        placeholder="Iskanje"
        type="text"
        onChange={handleInputChange}
        value={searchInput}
      />
      <SearchButton type="submit" aria-label="iskanje">
        <FaSearch />
      </SearchButton>
    </Wrapper>
  );
};

SearchBar.propTypes = propTypes;

export default SearchBar;

const SearchTerm = styled.input``;
const SearchButton = styled.button``;

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  border: ${({ theme }) => theme.primary[500]};

  ${SearchTerm} {
    width: 100%;
    outline: none;
    height: 2rem;
    border: 2px solid ${({ theme }) => theme.primary[500]};
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    padding: 0 0.5rem;
    background: ${({ theme }) => theme.grey[100]};

    &:focus {
      color: ${({ theme }) => theme.primary[700]};
    }
  }

  ${SearchButton} {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.primary[500]};
    color: ${({ theme }) => theme.primary[100]};
    border: 1px solid ${({ theme }) => theme.primary[500]};
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  @media (min-width: 768px) {
    width: 30%;
    padding: 0 0.5rem;
  }
`;
