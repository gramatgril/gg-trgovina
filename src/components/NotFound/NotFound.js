import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { Container, styles } from "../../styles";
import PrimaryButton from "../Button/Button";

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <StyledHeader>Prišlo je do napake - 404</StyledHeader>
        <StyledDescription>Ta stran ne obstaja</StyledDescription>
        <Link to="/">
          <PrimaryButton text="Nazaj na kategorije" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default NotFound;

const StyledHeader = styled.h1`
  font-size: 3.5rem;
`;

const StyledDescription = styled.h3`
  font-size: 2rem;
  padding: 2rem 0 6rem 0;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: ${styles.colors.grey};

  @media (min-width: 768px) {
    ${StyledHeader} {
      font-size: 5rem;
    }

    ${StyledDescription} {
      font-size: 3rem;
      padding: 3rem 0 10rem 0;
    }
  }
`;
