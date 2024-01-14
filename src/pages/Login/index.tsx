import { ConnectGoogleButton, LoginBox, PageContainer } from "./styles"
import FeedbackAppLogo from '../../assets/logo.png'
import LogoGoogle from '../../assets/Google Icon.png'

export function LoginPage() {
    return (
        <PageContainer>
            <LoginBox>
                <img src={FeedbackAppLogo} alt="Feedback App Logo" />
                <h1>Faça login com sua conta Google para acessar o sistema.</h1>
                <ConnectGoogleButton>
                    <img src={LogoGoogle} alt="Ícone do Google" />
                    <p>Entre com o Google</p>
                </ConnectGoogleButton>
            </LoginBox>
        </PageContainer>
    )
}