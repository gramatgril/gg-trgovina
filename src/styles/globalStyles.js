import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', 'Roboto', sans-serif;
  background: #fff;
  line-height: 1.4;
  font-size: 1rem;
}


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 5px 0;
  }


main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


.link {
  text-decoration: none;
}

li{
  list-style-type: none;
}

.img {
    height: 100%;
    width: 100%;
  }


`;
