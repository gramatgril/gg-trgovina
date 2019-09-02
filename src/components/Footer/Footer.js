import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";

import { styles } from "../../utils";

const getData = graphql`
  query {
    site {
      siteMetadata {
        information {
          company
          street
          city
          copyright
        }
        contactInfo {
          phone
          mail
        }
      }
    }
  }
`;

const Footer = () => {
  const { site } = useStaticQuery(getData);

  const { phone, mail } = site.siteMetadata.contactInfo;
  const { company, street, city, copyright } = site.siteMetadata.information;

  return (
    <FooterWrapper>
      <div className="segments">
        <div className="segment">
          <h2>O podjetju</h2>
          <p>{company}</p>
          <p>{street}</p>
          <p>{city}</p>
        </div>
        <hr className="divider" />
        <div className="segment">
          <h2>Informacije</h2>
          <p>{phone}</p>
          <p>{mail}</p>
          <p>
            <Link className="link" to="/pravno-obvestilo">
              Pravno obvestilo
            </Link>
          </p>
        </div>
        <hr className="divider" />
        <div className="segment">
          <h2>Delovni čas</h2>
          <p>Od ponedeljka do petka: 7h - 19h</p>
          <p>V zimskem času: 7h - 18h</p>
          <p>Sobota: 7h - 12h</p>
        </div>
      </div>
      <div className="copyright"></div>
      <p>&copy; {copyright}</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainBlack};
  color: ${styles.colors.mainWhite};
  text-align: center;

  .link {
    text-decoration: none;
    color: darkgray;
  }
  .link:hover {
    color: darkmagenta;
  }

  .segments {
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
      display: block;
    }

    .segment {
      h2 {
        padding: 0.5rem 0.5rem 0.5rem 0;
      }
      p {
        padding: 0.5rem;
      }
    }
  }

  .divider {
    color: white;
  }

  .copyright {
    padding-top: 1rem;
  }
`;
export default Footer;
