import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { GlobalStyle } from "./../styles";

import Footer from "./../components/Footer";
import Navbar from "./../components/Navbar";

const propTypes = {
  children: PropTypes.node.isRequired,
};

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

Layout.propTypes = propTypes;

export default Layout;
