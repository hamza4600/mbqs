import { createGlobalStyle } from "styled-components";

const lightThem = {
    navBar: '#204D70',
    color: 'black',
    navhoverIcon: '#00BFFF',

    iconGroup: '#00416A',
    iconColor: '#c4c4c4',
    sideBarBg: '#0E2637',
    sideBarText: '#c4c4c4',
    modelOne: '#00416A',
    page: '#F0F8FF',
    adimPageText: '#003153',
    cards: 'white',
    cardText: '#00416A',
    toolbar: '#003165',
    toolipText: '#C8CACB',

    footerColor: '#D8E6F1',
    footer: '#204D70',
    font : 'Poppins, sans-serif'
}

const darkThem = {
    navBar: 'black',
    color: 'white',
    iconGroup: '#00416A',
    iconColor: '#c4c4c4',
    sideBarBg: '#1a1919',
    sideBarText: 'white',
    modelOne: '#00416A',
    page: '#2d5263',
    adimPageText: 'white',
    cards: '#1b1c1e',
    cardText: 'white',
    toolbar: '#1a1919',
    toolipText: 'white',

    footerColor: 'white',
    footer: '#B0C4DE',
    font : 'Poppins, sans-serif'
}

const Them = {
    light: lightThem,
    dark: darkThem
}

export default Them;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
   
    body {
      
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: ${({ theme }) => theme.font} !important;
        font-weight: 400;
        font-style: normal;
        transition: all 0.20s linear;
    }
    input, textarea, button {font-family: inherit}
    a {
        text-decoration: none;
        color: inherit;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    button {
        cursor: pointer;
    }
`;