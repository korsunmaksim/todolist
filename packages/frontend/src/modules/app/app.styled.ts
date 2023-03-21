import { createGlobalStyle } from "styled-components";
import { COLORS, MARGINS, FAMILIES } from "../theme";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${FAMILIES.default};
    min-height: 100vh;  
    width:min(2520px,90%);
    scroll-behavior: smooth;
    margin: ${MARGINS.auto};
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${COLORS.background_color};
    color:${COLORS.white}
  }
  `;
