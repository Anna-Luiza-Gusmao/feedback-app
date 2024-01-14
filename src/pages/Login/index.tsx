import { LoginBox, PageContainer } from "./styles"
import FeedbackAppLogo from '../../assets/logo.png'

export function LoginPage() {
    return (
        <PageContainer>
            <LoginBox>
                <img src={FeedbackAppLogo} alt="Feedback App Logo" />
                <h1>Faça login com sua conta Google para acessar o sistema.</h1>
            </LoginBox>
        </PageContainer>
    )
}