import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
body{
    width: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
}
`;
