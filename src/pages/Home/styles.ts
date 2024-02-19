import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    gap: 1.125rem;
    width: 100%;
    height: 100%;

    padding: 2rem;
`

export const Content = styled.main`
    width: 75vw;
`

export const FeedbackList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;

    height: 80vh;
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

export const DataFeedbackEmpty = styled.p`
    color: ${props => props.theme.colors["gray-400"]};
`