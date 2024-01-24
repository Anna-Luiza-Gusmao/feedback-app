import { styled } from "styled-components"

export const FeedbackContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.white};
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};  
    transition: background 0.25s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors["white-100"]};
    }
`

const PatternDiv = styled.div`
    display: flex;
    align-items: center;
`

export const FeedbackData = styled(PatternDiv)`
    gap: 2rem;
`

export const FeedbackId = styled.div`
    font-size: 1.125rem;
    font-weight: 500;

    padding: 0.5rem 0.875rem;
    border-radius: 8px;
    background-color: ${props => props.theme.colors["gray-200"]};  
`

export const FeedbackDescription = styled.div`
    p {
        margin-bottom: 0.5rem;
    }

    p:nth-child(1) {
        font-size: 1.125rem;
        font-weight: 500;
    }

    p:nth-child(2) {
        font-size: 0.875rem;
        font-weight: 400;
    }

    section {
        display: flex;
        flex-wrap: wrap;
    }
`

export const Tag = styled.div`
    padding: 0.375rem 0.75rem;
    margin: 0.2rem;

    border-radius: 8px;
    color: ${props => props.theme.colors.white};
    font-size: 0.875rem;
    font-weight: 500;
    background-color: ${props => props.theme.colors["purple-300"]};
`

export const CommentBox = styled(PatternDiv)`
    gap: 0.2rem;
`