import styled from "styled-components"

export const PageContainer = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginBox = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 25.75rem;
    gap: 2rem;
    
    padding: 4rem 3.5rem;

    border-radius: 16px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};

    h1 {
        font-size: 1rem;
        font-weight: 400;
        line-height: normal;
        text-align: center;
    }
`

export const ConnectGoogleButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1rem;

    padding: 1rem;
    border-radius: 8px;
    border-bottom: 2px solid ${props => props.theme.colors["purple-300"]};
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};
    transition: background 0.5s ease-in-out;

    img {
        width: 1.75rem;
    }

    p {
        font-weight: 600;
        color: ${props => props.theme.colors["gray-400"]};
    }

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.colors["purple-300"]};

        p {
            color: ${props => props.theme.colors.white};
        }
    }
`