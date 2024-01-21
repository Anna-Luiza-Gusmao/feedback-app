import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors['blue-100']};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    body, input, textarea, button, a, select, option {
        font-family: Inter, sans-serif;
        font-weight: 400;   
        font-size: 1rem;
        color: ${(props) => props.theme.colors["gray-700"]};
    }

    :focus {
        outline: 4px auto -webkit-focus-ring-color;
    }
`