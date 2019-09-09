import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";

import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: #fff;
    line-height: 1.4;
    font-size: 1rem;
  }

  main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
