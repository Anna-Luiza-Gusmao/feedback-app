import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
    margin-top: 2rem;
    padding: 1rem 2.5rem;

    background-color: ${props => props.theme.colors["black-700"]};
    border-radius: 16px;
    box-shadow: 0px 4px 8px 0px ${props => props.theme.colors["gray-600"]};
`

export const Profile = styled.section`
    padding-left: 0.5rem;

    p {
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: none;
        text-align: left;
        color: ${props => props.theme.colors.white};
    }

    p:nth-child(1) {
        font-size: 1rem;
    }

    p:nth-child(2) {
        font-size: 0.875rem;
    }
`