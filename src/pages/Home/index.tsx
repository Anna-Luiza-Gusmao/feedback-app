import { FunnelSimple } from "@phosphor-icons/react"
import {
    BoxFromNavbar,
    CheckboxContent,
    Content,
    HeaderBoxFromNavbar,
    HeaderFromNavbar,
    HomeContainer,
    NavBar
} from "./styles"
import { Header } from "./components/Header"
import { CheckboxStatus } from "./components/Checkbox"
import { useState } from "react"

export function HomePage() {
    const [isCheckedStatus, setIsCheckedStatus] = useState({
        opened: false,
        inProgress: false,
        concluded: false
    })

    const handleClearFilter = () => {
        setIsCheckedStatus({
            opened: false,
            inProgress: false,
            concluded: false
        })
    }

    return (
        <HomeContainer>
            <NavBar>
                <HeaderFromNavbar>
                    <p>Filtros</p>
                    <FunnelSimple size={28} />
                </HeaderFromNavbar>
                <BoxFromNavbar>
                    <HeaderBoxFromNavbar>
                        <p>Tags</p>
                    </HeaderBoxFromNavbar>
                </BoxFromNavbar>
                <BoxFromNavbar>
                    <HeaderBoxFromNavbar>
                        <p>Status</p>
                        <button onClick={handleClearFilter}>Limpar filtro</button>
                    </HeaderBoxFromNavbar>
                    <CheckboxContent>
                        <div>
                            <CheckboxStatus
                                labelName="Em Aberto"
                                typeChecked="opened"
                                checked={isCheckedStatus.opened}
                                setIsCheckedStatus={setIsCheckedStatus}
                            />
                            <p>0</p>
                        </div>
                        <div>
                            <CheckboxStatus
                                labelName="Em Progresso"
                                typeChecked="inProgress"
                                checked={isCheckedStatus.inProgress}
                                setIsCheckedStatus={setIsCheckedStatus}
                            />
                            <p>0</p>
                        </div>
                        <div>
                            <CheckboxStatus
                                labelName="Concluído"
                                typeChecked="concluded"
                                checked={isCheckedStatus.concluded}
                                setIsCheckedStatus={setIsCheckedStatus}
                            />
                            <p>0</p>
                        </div>
                    </CheckboxContent>
                </BoxFromNavbar>
            </NavBar>
            <Content>
                <Header />
            </Content>
        </HomeContainer>
    )
}