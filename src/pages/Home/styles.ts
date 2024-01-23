import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    gap: 1.125rem;
    width: 100%;
    height: 100%;

    padding: 2rem;
`

export const NavBar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 25vw;

    background-color: ${props => props.theme.colors["gray-100"]};
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};
    border-radius: 16px;
    padding: 2rem 1.25rem;
`

export const HeaderFromNavbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1.25rem;

    p {
        font-size: 1.25rem;
        font-weight: 600;
    }
`

export const BoxFromNavbar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;
    
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};
    background-color: ${props => props.theme.colors.white};
`

export const HeaderTagsFromNavbar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    p {
        font-size: 1rem;
        font-weight: 700;
    }
`

interface Tag {
    selected: boolean
}

export const Tag = styled.button<Tag>`
    all: unset;
    padding: 0.375rem 0.75rem;
    margin: 0.2rem;

    cursor: pointer;
    border-radius: 8px;
    color: ${props => props.theme.colors.white};
    font-size: 0.875rem;
    font-weight: 500;
    background-color: ${
        props => props.selected ? props.theme.colors["blue-700"] : props.theme.colors["purple-300"]
    };
`

export const HeaderStatusFromNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 1rem;
        font-weight: 700;
    }

    button {
        all: unset;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 8px;

        font-size: 0.875rem;
        color: ${props => props.theme.colors["gray-400"]};
        transition: background 0.25s ease-in-out;
    
        &:hover {
            background-color: ${props => props.theme.colors["gray-50"]};
        }
    }
`

export const CheckboxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;

    div {
        display: flex;
        justify-content: space-between;
    }
`

export const Content = styled.main`
    width: 75vw;
`