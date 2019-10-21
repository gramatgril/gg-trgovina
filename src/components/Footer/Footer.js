import React from "react";
import styled from "styled-components";
import { Link, graphql, useStaticQuery } from "gatsby";

import { navLinks, navIcons, siteLinks } from "./../../styles/links";

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
            <StyledLink to={path} key={id} className="link">
              <p>{name}</p>
            </StyledLink>
          ))}
          <StyledLink className="link" to="/pravna-obvestila">
            <p>Pravna obvestila</p>
          </StyledLink>
        </div>

        <div className="segment">
          <h4>naša ponudba</h4>
          {siteLinks.map(({ id, path, name }) => (
            <StyledLink to={path} key={id} className="link">
              <p>{name}</p>
            </StyledLink>
          ))}
        </div>
        <div className="segment">
          <h4>o nas</h4>
          <p>{name}</p>
          <p>{street}</p>
          <p>{city}</p>
          <p>pon - pet: 7.00 - 19.00</p>
          <p>sob: 7.00 - 13.00</p>
        </div>
        <div className="segment">
          <h4>kontakt</h4>
          <p>t: {phone}</p>
          <p>f: {fax}</p>
          <p>e: {mail}</p>
          <p>w: {web}</p>
          <StyledIconWrapper>
            {navIcons.map(({ id, path, icon }) => (
              <a key={id} href={path} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ))}
          </StyledIconWrapper>
        </div>
      </div>
      <StyledBottomBar>
        <p>&copy; {copyright}</p>
      </StyledBottomBar>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  text-align: center;

  .segments {
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
    letter-spacing: ${({ theme }) => theme.letterSpacing};
    font-size: 1.4rem;
    font-weight: 500;
  }

  p {
    transition: ${({ theme }) => theme.linear};
    color: ${({ theme }) => theme.white};
    padding: 0.2rem 0;
  }

  @media (max-width: 768px) {
    .segments {
      display: block;
    }
  }
`;

const StyledBottomBar = styled.div`
  background: ${({ theme }) => theme.green};

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  :hover p {
    transition: ${({ theme }) => theme.linear};
    color: ${({ theme }) => theme.green};
  }
`;

const StyledIconWrapper = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  width: 10rem;
  justify-content: space-around;

  .icon {
    font-size: 1.6rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.linear};

    :hover {
      color: ${({ theme }) => theme.white};
    }
  }

  .facebook-icon {
    color: ${({ theme }) => theme.green};
  }

  .stil-icon {
    height: 25px;
  }

  .instagram-icon {
    color: ${({ theme }) => theme.green};
  }
`;
