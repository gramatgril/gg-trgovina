import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "./../styles";

import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = propTypes;

export default Layout;
