import {createGlobalStyle} from 'styled-components';

export const lightTheme = {
    body: "#fff",
    fontColor: "#000",
    btnLight: "#ffc107",
    bgLight: "#dee2e6",
    bgNav: "#fff",
};

export const darkTheme = {
    body: "#2b2b2b",
    fontColor: "#fff",
    btnLight: "##ffc107",
    bgLight: "#373636",
    bgNav: "#373636",
};


export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
    h1, h2, h3, h4, p, small{
        color: ${props => props.theme.fontColor};
    }
    nav{
        background-color: ${props => props.theme.bgNav};
    }
    a, button{
        color: ${props => props.theme.fontColor};
    }

`
