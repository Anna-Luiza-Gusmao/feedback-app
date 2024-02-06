import styled from "styled-components"

export const Box = styled.form`
    all: unset;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-height: 70vh;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 3rem 2rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};  

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        padding-left: 1rem;
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 0 1rem;
    overflow-y: auto;
    scrollbar-width: auto;
    scrollbar-color: ${props => props.theme.colors["gray-300"]} ${props => props.theme.colors["gray-100"]};
  
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
  
    &::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors["gray-100"]};
        border-radius: 8px;
    }
  
    &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors["gray-300"]};
        border-radius: 8px;
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

    label {
        font-size: 1.25rem;
        font-weight: 600;

        span {
            color: ${props => props.theme.colors["red-400"]};  
        }
    }

    p {
        font-size: 0.875rem;
    }

    input[type=text] {
        font-size: 0.875rem;
        border: none;
        background-color: ${props => props.theme.colors["gray-150"]}; 
        padding: 0.75rem;
        border-radius: 8px;
    }

    input[type=text]:focus {
        outline: 2px solid ${props => props.theme.colors["purple-300"]};  
    }
`

export const TitleContainer = styled(PatternFormsContainer)`
    
`

export const DescriptionContainer = styled(PatternFormsContainer)`
    position: relative;

    textarea {
        resize: none;
        border-radius: 8px;
        border: none;
        background-color: ${props => props.theme.colors["gray-150"]}; 
        padding: 0.75rem;
        font-size: 0.875rem;
    }

    textarea:focus {
        outline: 2px solid ${props => props.theme.colors["purple-300"]};  
    }
`

export const NumberOfCharacters = styled.p`
    position: absolute;
    bottom: 2rem;
    right: 0.75rem;
    color: ${props => props.theme.colors["gray-400"]}; 
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

export const ErrorsContainer = styled.div`
    p {
        font-size: 0.75rem;
        font-weight: 500;
        color: ${props => props.theme.colors["red-400"]};  
    }
`