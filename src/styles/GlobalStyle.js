import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

#root {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  min-height: 100vh;
}
.App {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-height: 60vh;
  min-width: 70vw;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

`;

export default GlobalStyle;
