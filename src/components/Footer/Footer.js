import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';

import { navLinks, navIcons, siteLinks } from './../../styles/links';

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
  const { phone, mail, fax } = site.siteMetadata.contactInfo;

  return (
    <Wrapper>
      <Segments>
        <SingleSegment>
          <h4>informacije</h4>
          {navLinks.map(({ id, path, name }) => (
            <StyledLink to={path} key={id} className="link">
              <p>{name}</p>
            </StyledLink>
          ))}
          <StyledLink className="link" to="/pravna-obvestila">
            <p>Pravna obvestila</p>
          </StyledLink>
        </SingleSegment>

        <SingleSegment>
          <h4>naša ponudba</h4>
          <LinkSegment>
            {siteLinks.map(({ id, path, name }) => (
              <StyledLink to={path} key={id} className="link">
                <p>{name}</p>
              </StyledLink>
            ))}
          </LinkSegment>
        </SingleSegment>
        <SingleSegment>
          <h4>o nas</h4>
          <p>{name}</p>
          <p>{street}</p>
          <p>{city}</p>
          <p>pon - pet: 7.00 - 19.00</p>
          <p>sob: 7.00 - 13.00</p>
        </SingleSegment>
        <SingleSegment>
          <h4>kontakt</h4>
          <p>t: {phone}</p>
          <p>f: {fax}</p>
          <p>e: {mail}</p>
          <StyledIconWrapper>
            {navIcons.map(({ id, path, icon, label }) => (
              <a key={id} href={path} target="_blank" rel="noopener noreferrer" aria-label={label}>
                {icon}
              </a>
            ))}
          </StyledIconWrapper>
        </SingleSegment>
      </Segments>
      <BottomBar>
        <p>&copy; {copyright}</p>
      </BottomBar>
    </Wrapper>
  );
};

export default Footer;

const Segments = styled.div``;
const SingleSegment = styled.div``;
const BottomBar = styled.div``;
const StyledLink = styled(Link)``;
const StyledIconWrapper = styled.div``;
const LinkSegment = styled.div``;

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.grey[900]};
  color: ${({ theme }) => theme.white};
  text-align: center;

  ${Segments} {
    min-height: 300px;
    display: grid;
    grid-template-columns: 2fr 3fr 2fr 2fr;
    grid-column-gap: 1rem;
  }

  ${SingleSegment} {
    padding: 1.5rem 0;
  }

  ${LinkSegment} {
    display: grid;
    grid-template-columns: 1fr 1fr;

    p {
      padding: 0.5rem 0;
    }
  }

  ${BottomBar} {
    background: ${({ theme }) => theme.primary[500]};
    color: ${({ theme }) => theme.primary[100]};
  }

  ${StyledLink} {
    &:hover p {
      transition: ${({ theme }) => theme.linear};
      color: ${({ theme }) => theme.primary[500]};
    }
  }

  ${StyledIconWrapper} {
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
        color: ${({ theme }) => theme.primary[100]};
      }
    }

    .facebook-icon {
      color: ${({ theme }) => theme.primary[500]};
    }

    .stil-icon {
      height: 25px;
    }

    .instagram-icon {
      color: ${({ theme }) => theme.primary[500]};
    }
  }

  h4 {
    text-transform: uppercase;
    padding: 1rem 0;
    letter-spacing: ${({ theme }) => theme.letterSpacing};
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    transition: ${({ theme }) => theme.linear};
    color: ${({ theme }) => theme.white};
    padding: 0.25rem 0;
  }

  @media (max-width: 768px) {
    ${Segments} {
      display: block;
    }

    ${LinkSegment} {
      display: block;

      p {
        padding: 0.5rem 0;
      }
    }

    ${BottomBar} {
      display: block;
    }

    p {
      padding: 0.5rem 0;
    }
  }
`;
