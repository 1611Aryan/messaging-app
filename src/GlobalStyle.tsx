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

    --primary:#00adb5;
    --secondary:#eeeeee;
    --tertiary:#393e46;
    --secondary2:#222831;

    --navHeight:10vh;
    --inputHeight:8vh;
}

body{
    width:100vw;
    height:100vh;
    overflow:hidden;
}
`;
export default GlobalStyle;
