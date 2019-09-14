import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";

import { styles } from "../../utils";

const getData = graphql`
  query {
    site {
      siteMetadata {
        companyInfo {
          name
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

  const { name, city, copyright, street } = site.siteMetadata.companyInfo;
  const { phone, mail } = site.siteMetadata.contactInfo;

  return (
    <Wrapper>
      <div className="segments">
        <div className="segment">
          <p>{name}</p>
          <p>{street}</p>
          <p>{city}</p>
        </div>
        <hr className="divider" />
        <div className="segment">
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
          <p>Od ponedeljka do petka: 7h - 19h</p>
          <p>V zimskem času: 7h - 18h</p>
          <p>Sobota: 7h - 13h</p>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {copyright}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.black};
  color: ${styles.colors.white};
  text-align: center;

  p {
    padding: 0.5rem;
  }

  .segment {
    margin: 1rem 0;
  }

  .segments: {
    display: block;
    font-size: 0.5rem;
  }

  .divider {
    color: ${styles.colors.green};
  }

  .copyright {
    padding-top: 1rem;

    p {
      font-size: 0.8rem;
      color: ${styles.colors.white};
    }
  }

  .link {
    text-decoration: none;
    color: ${styles.colors.white};

    :hover {
      color: ${styles.colors.green};
    }
  }
  /* .link :hover {

  } */

  @media (min-width: 768px) {
    .segments {
      display: flex;
      justify-content: space-evenly;
    }
  }
`;
export default Footer;
