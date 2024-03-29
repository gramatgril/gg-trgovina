import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #fff;
  font-size: 1rem;
  color: #333;
}

main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

p {
  margin-bottom: 0;
}


.link {
  text-decoration: none;
}

li {
  list-style-type: none;
}

.img {
    height: 100%;
    width: 100%;
  }
`;
