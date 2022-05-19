import styled, {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    btnLight: "#ffc107",
    bgLight: "#dee2e6",
    bgNav: "#fff",
};

export const darkTheme = {
    body: "#373636",
    fontColor: "#fff",
    btnLight: "##ffc107",
    bgLight: "#373636",
    bgNav: "#2b2b2b",
};


export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
    h1, h2, h3, h4,h5, h6, p, small, li, a, span{
        color: ${props => props.theme.fontColor};
    }
    nav, textarea, input{
        background-color: ${props => props.theme.bgNav};
    }

    a, button{
        color: ${props => props.theme.fontColor};
    }
`;
