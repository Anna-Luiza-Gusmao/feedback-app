import { Content, HomeContainer, LogoutButton, NavBar } from "./styles"
import Logo from "../../assets/logo.png"
import { SignOut } from '@phosphor-icons/react'
import { useNavigate } from "react-router"

export function HomePage() {
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate("/")
    }

    return (
        <HomeContainer>
            <NavBar>
                <div>
                    <img src={Logo} alt="Logo Feedback App" />
                </div>
                <LogoutButton onClick={handleLogout}>
                    <SignOut size={28} />
                    <p>Sair</p>
                </LogoutButton>
            </NavBar>
            <Content>
                Conteúdo Principal
            </Content>
        </HomeContainer>
    )
}