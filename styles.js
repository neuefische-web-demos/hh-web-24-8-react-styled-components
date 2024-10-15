import { createGlobalStyle } from "styled-components";
import { Ruge_Boogie, Roboto } from "next/font/google";

const rugeBoogie = Ruge_Boogie({ subsets: ["latin"], weight: "400" });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default createGlobalStyle`
  *, 
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #22babb; 
    --secondary-color: #f24405;
    --primary-background: #d3d3d3;
    --color-danger: #FF0000;
    --font-roboto: ${roboto.style.fontFamily}
  }

  body {
    margin: 0;
    font-family: ${rugeBoogie.style.fontFamily};
    padding: 2rem;
  }
  h1{
    color: blue;
  }
`;
