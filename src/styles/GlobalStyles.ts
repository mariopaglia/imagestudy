import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: 0;
        outline: none;
    }

    html, body {
        width: 100%;
        height: 100%;
        font-family: 'Poppins';
        background: var(--background-800);
        color: var(--text);
    }

    input:focus {
        border: 0;
    }

    a {
        color: var(--text);
    }

    a:visited {
        color: var(--text);
    }

    :root {
        --background-500: #282a36;
        --background-800: #262626;
        --background-900: #191a21;
        --text: #f6f6f4;
        --pink: #f286c4;
    }
`;
