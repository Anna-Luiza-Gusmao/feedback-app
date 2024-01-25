import { ConnectGoogleButton, LoginBox, PageContainer } from "./styles"
import FeedbackAppLogo from '../../assets/logo.png'
import LogoGoogle from '../../assets/Google Icon.png'
import { useNavigate } from "react-router-dom"
import { signInWithGoogle } from "../../firebase/authGoogle"

export function LoginPage() {
    const navigate = useNavigate()

    const handleConnectWithGoogle = async () => {
        try {
            await signInWithGoogle()
            navigate('/home')
        } catch (error) {
            console.error("Error to sign in with Google Account: ", error)
        }
    }

    return (
        <PageContainer>
            <LoginBox>
                <img src={FeedbackAppLogo} alt="Feedback App Logo" />
                <h1>Faça login com sua conta Google para acessar o sistema.</h1>
                <ConnectGoogleButton onClick={handleConnectWithGoogle}>
                    <img src={LogoGoogle} alt="Ícone do Google" />
                    <p>Entre com o Google</p>
                </ConnectGoogleButton>
            </LoginBox>
        </PageContainer>
    )
}