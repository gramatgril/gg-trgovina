import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import { styles } from "../../styles";
import Img from "gatsby-image";

const propTypes = {
  toggleOpen: PropTypes.func.isRequired,
};

const getLogo = graphql`
  query {
    logo: file(relativePath: { eq: "gg_logo.jpg" }) {
      image: childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const NavbarHeader = ({ toggleOpen }) => {
  const { logo } = useStaticQuery(getLogo);

  return (
    <Wrapper>
      <StyledLogo to="/">
        <Img
          fluid={logo.image.fluid}
          alt="Logo"
          className="img"
          imgStyle={{ objectFit: "contain" }}
        />
      </StyledLogo>
      <FaBars className="toggle-icon" onClick={() => toggleOpen()} />
    </Wrapper>
  );
};

NavbarHeader.propTypes = propTypes;

export default NavbarHeader;

const StyledLogo = styled(Link)`
  width: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0.5rem 0 0;

  .link {
    display: flex;
    justify-content: space-between;
  }

  .toggle-icon {
    font-size: 1.5rem;
    cursor: pointer;
    color: ${styles.colors.green};
  }

  /* Menu icon hidden on mobile screen size */
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`;
