import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --fontHeading:'Open Sans', sans-serif;
    --fontPara:'Lato', sans-serif;

    --primary:#343f56;
    --secondary:#f8f5f1;
    --tertiary:#e9896a;
}

body{
    width:100vw;
    height:100vh;
    overflow:hidden;
}
`;
export default GlobalStyle;
