import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "../../styles";
import { Container } from "./../../styles";
import { types } from "./../../utils/";

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  showAllProducts: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

const defaultProps = {
  inputValue: "",
};

const SortMenu = ({ dispatch, showAllProducts, inputValue }) => {
  return (
    <Wrapper>
      <button
        type="button"
        onClick={() => dispatch({ type: types.SHOW_PROMOTED })}
      >
        Promoted only
      </button>
      <button type="button" onClick={showAllProducts}>
        All items
      </button>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={e =>
            dispatch({ type: types.INPUT_CHANGE, inputValue: e.target.value })
          }
        />
        <button
          type="button"
          onClick={() => dispatch({ type: types.SEARCH_PRODUCT })}
        >
          Išči
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: types.SET_SORT_DATE_UP })}
        >
          Date up
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: types.SET_SORT_DATE_DOWN })}
        >
          Date down
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: types.SET_SORT_PRICE_UP })}
        >
          Price up
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: types.SET_SORT_PRICE_DOWN })}
        >
          Price down
        </button>
      </div>
    </Wrapper>
  );
};

SortMenu.propTypes = propTypes;
SortMenu.defaultProps = defaultProps;

export default SortMenu;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1200px) {
    width: 60vw;
  }
`;
