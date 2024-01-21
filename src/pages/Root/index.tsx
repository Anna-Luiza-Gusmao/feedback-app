import { Outlet, useLocation } from "react-router-dom"
import { Header } from "../../components/Header"
import { Content } from "./styles"

export function Root() {
    const location = useLocation()

    const routesWithHeader = ["/home", "/:id/feedback"]

    const shouldRenderHeader = routesWithHeader.includes(location.pathname)

    return (
        <Content>
            {shouldRenderHeader && <Header />}
            <Outlet />
        </Content>
    )
}