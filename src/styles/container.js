import styled from "styled-components";

// Container div makes sure site is responsive
export const Container = styled.div`
  padding: 2rem 0;
  width: 90vw;
  margin: 0 auto;
  text-align: ${({ align }) => (align ? `${align}` : `left`)};

  @media (min-width: 768px) {
    width: 80vw;
  }

  @media (min-width: 1200px) {
    width: 60vw;
  }
`;
