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