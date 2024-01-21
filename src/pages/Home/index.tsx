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

export function HomePage() {
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
                        <button>Limpar filtro</button>
                    </HeaderBoxFromNavbar>
                    <CheckboxContent>
                        <div>
                            <label>
                                <input type="checkbox" checked />
                                Em Aberto
                            </label>
                            <p>3</p>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" checked />
                                Em Progresso
                            </label>
                            <p>3</p>
                        </div>
                        <div>
                            <label>
                                <input type="checkbox" checked />
                                Concluído
                            </label>
                            <p>3</p>
                        </div>
                    </CheckboxContent>
                </BoxFromNavbar>
            </NavBar>
            <Content>
                Conteúdo Principal
            </Content>
        </HomeContainer>
    )
}