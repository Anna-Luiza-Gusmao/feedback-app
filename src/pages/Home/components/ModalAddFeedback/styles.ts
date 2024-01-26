import styled from "styled-components"

export const Box = styled.form`
    all: unset;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 3rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};  

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
`

export const CloseButton = styled.button`
    all: unset;
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    margin: 0.75rem;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background 0.25s ease-in-out;

    svg {
        color: ${(props) => props.theme.colors["gray-700"]};
    }
    
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors["gray-50"]};
    }
`

const PatternFormsContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 600;

        span {
            color: ${props => props.theme.colors["red-400"]};  
        }
    }

    p {
        font-size: 0.875rem;
    }
`

export const TitleContainer = styled(PatternFormsContainer)`
    
`

export const DescriptionContainer = styled(PatternFormsContainer)`
    
`

export const TagsContainer = styled(PatternFormsContainer)`
    
`

export const AddFeedbackButton = styled.button`
    all: unset;
    padding: 1rem;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 500;

    color: ${props => props.theme.colors.white};  
    border-radius: 8px;
    background-color: ${props => props.theme.colors["purple-300"]};  
    transition: background-color 0.25s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors["purple-400"]};
    }
`