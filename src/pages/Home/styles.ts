import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`

export const NavBar = styled.nav`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    margin: 2.5rem 1rem;

    background-color: ${props => props.theme.colors["gray-100"]};
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};
    padding: 0 1.25rem;

    div {
        position: absolute;
        top: 2.5rem;
    }

    button {
        position: absolute;
        bottom: 2.5rem;
    }
`

export const LogoutButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 1rem;

    padding: 0.75rem;
    border-radius: 8px;
    background: ${props => props.theme.colors["purple-300"]};
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};
    transition: opacity 0.5s ease-in-out;

    p, svg {
        color: ${props => props.theme.colors.white};
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export const Content = styled.main`
    width: 75vw;
    margin: 2.5rem 1rem;
`