import { createGlobalStyle } from "styled-components";

const GlobatStlye = createGlobalStyle`
*{
 padding:0 ;
 margin: 0 ;
 box-sizing: border-box ;
 list-style: none ;
 overflow-x: hidden ;
 font-family: 'Open Sans', sans-serif;
}
a{
 text-decoration: none ;
}
 @keyframes animate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0);
    }
  }
   @keyframes fadeOut {
 
    100% {
     opacity: 0;
      visibility: hidden;
    }
  }
`;

export default GlobatStlye;
