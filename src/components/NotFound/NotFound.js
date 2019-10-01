import React from "react";
import styled from "styled-components";

import { Container, styles } from "../../styles";

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Prišlo je do napake - 404</h1>
        <h3>Ta stran ne obstaja</h3>
      </Wrapper>
    </Container>
  );
};

export default NotFound;

const Wrapper = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: ${styles.colors.grey};

  h1 {
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
  }
`;
