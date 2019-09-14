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
        }
      }
    }
  }
`;

const Footer = () => {
  const { site } = useStaticQuery(getData);

  const {
    name,
    city,
    copyright,
    street,
    description,
  } = site.siteMetadata.companyInfo;

  const { phone, mail } = site.siteMetadata.contactInfo;

  return (
    <Wrapper>
      <div className="segments">
        {/* Company information */}
        <div className="segment">
          <h4>{name}</h4>
          <p>{description}</p>
          <p>{street}</p>
          <p>{city}</p>
          <Link className="link" to="/pravno-obvestilo">
            <p>Pravno obvestilo</p>
          </Link>
        </div>
        {/* Site map */}
        <div className="segment">
          {navLinks.map(({ id, path, name }) => (
            <Link to={path} key={id} className="link">
              <p>{name}</p>
            </Link>
          ))}
        </div>
        {/* Category links */}
        <div className="segment">
          {siteLinks.map(({ id, path, name }) => (
            <Link to={path} key={id} className="link">
              <p>{name}</p>
            </Link>
          ))}
        </div>
        <div className="segment">
          {" "}
          <p>Ponedeljek do petek: 7h - 19h</p>
          <p>Sobota: 7h - 13h</p>
          <p>{phone}</p>
          <p>{mail}</p>
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
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-column-gap: 1rem;
  }

  .segment {
    padding: 1.5rem 0;
  }

  h4 {
    padding: 0.5rem;
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    transition: ${styles.linearTransition};
    color: ${styles.colors.white};
    padding: 0.2rem 0;
  }

  .link {
    text-decoration: none;

    :hover p {
      transition: ${styles.linearTransition};
      color: ${styles.colors.green};
    }
  }

  .bottom-bar {
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
  padding: 0.5rem;
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
