import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    margin-bottom: 1.25rem;

    background-color: ${props => props.theme.colors["blue-700"]};
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};  
`

export const Box = styled.div`
    display: flex;
    gap: 4rem;
    align-items: center;
    flex: 1;

    section {
        display: flex;
        align-items: center;
        color: ${props => props.theme.colors.white};
    }
`

export const NumberFeedbacksContainer = styled.section`
    gap: 0.75rem;

    div {
        padding: 0.3rem 0.6rem;
        border-radius: 8px;
        background-color: ${props => props.theme.colors["purple-300"]};

        p {
            font-size: 1.125rem;
        }
    }

    p {
        font-size: 1.25rem;
        font-weight: 500;
    }
`

export const OrdererContainer = styled.section`
    gap: 0.5rem;
    font-size: 1.125rem;
    font-weight: 400;
`

const PatternButton = styled.button`
    all: unset;
    display: flex;
    align-items: center;

    cursor: pointer;
    border-radius: 8px;
`

export const OrdererButton = styled(PatternButton)`
    justify-content: space-evenly;
    width: 10rem;

    padding: 0.5rem;
    transition: background 0.25s ease-in-out;

    p {
        font-weight: 500;
    }

    &:hover {
        background-color: ${props => props.theme.colors["blue-500"]};
    }
`

export const AddFeedbackButton = styled(PatternButton)`
    gap: 0.5rem;
    
    padding: 0.75rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors["purple-300"]};
    transition: background-color 0.25s ease-in-out;

    &:hover {
        background-color: ${props => props.theme.colors["purple-400"]};
    }
`