import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";

import { styles } from "../../utils";

import { navLinks, navIcons, siteLinks } from "./../../utils/constants";

const getData = graphql`
  query {
    site {
      siteMetadata {
        companyInfo {
          name
          description
          copyright
          address
          street
          city
        }
        contactInfo {
          phone
          mail
          web
          fax
        }
      }
    }
  }
`;

const Footer = () => {
  const { site } = useStaticQuery(getData);

  const { name, city, copyright, street } = site.siteMetadata.companyInfo;

  const { phone, mail, web, fax } = site.siteMetadata.contactInfo;

  return (
    <Wrapper>
      <div className="segments">
        <div className="segment">
          <h4>informacije</h4>
          {navLinks.map(({ id, path, name }) => (
            <Link to={path} key={id} className="link">
              <p>{name}</p>
            </Link>
          ))}
          <Link className="link" to="/pravna-obvestila">
            <p>Pravna obvestila</p>
          </Link>
        </div>

        <div className="segment">
          <h4>naša ponudba</h4>
          {siteLinks.map(({ id, path, name }) => (
            <Link to={path} key={id} className="link">
              <p>{name}</p>
            </Link>
          ))}
        </div>

        <div className="segment">
          <h4>o nas</h4>
          <p>{name}</p>
          <p>{street}</p>
          <p>{city}</p>
          <p className="open-hours">pon - pet: 7.00 - 19.00</p>
          <p className="open-hours">sob: 7.00 - 13.00</p>
        </div>
        <div className="segment">
          <h4>kontakt</h4>
          <p>t: {phone}</p>
          <p>f: {fax}</p>
          <p>e: {mail}</p>
          <p>w: {web}</p>
          <IconWrapper>
            {navIcons.map(({ id, path, icon }) => (
              <Link to={path} key={id} className="link">
                <p>{icon}</p>
              </Link>
            ))}
          </IconWrapper>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; {copyright}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: ${styles.colors.black};
  color: ${styles.colors.white};
  text-align: center;

  .segments {
    /* align-items: start; */
    min-height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }

  .segment {
    padding: 1.5rem 0;
  }

  h4 {
    text-transform: uppercase;
    padding: 1rem 0;
    letter-spacing: ${styles.letterSpacing};
    font-size: 1.4rem;
    font-weight: 500;
  }

  p {
    transition: ${styles.linearTransition};
    color: ${styles.colors.white};
    padding: 0.2rem 0;
  }

  /* .open-hours {
    font-weight: 700;
  } */

  .link {
    text-decoration: none;

    :hover p {
      transition: ${styles.linearTransition};
      color: ${styles.colors.green};
    }
  }

  .bottom-bar {
    /* display: flex; */
    /* justify-content: center; */
    background: ${styles.colors.green};

    p {
      color: ${styles.colors.black};
    }
  }

  @media (max-width: 768px) {
    .segments,
    .bottom-bar {
      display: block;
    }
  }
`;

const IconWrapper = styled.div`
  padding: 1rem 0;
  margin 0 auto;
  display: flex;
  width: 10rem;
  justify-content: space-around;

  .icon {
    font-size: 1.6rem;
    cursor: pointer;
    transition: ${styles.linearTransition};

    :hover {
    color: ${styles.colors.white};
    }
  }

  .facebook-icon {
    color: ${styles.colors.green};
  }

  .stil-icon {
    height: 25px;
  }

  .instagram-icon {
    color: ${styles.colors.green};
  }
`;

export default Footer;
