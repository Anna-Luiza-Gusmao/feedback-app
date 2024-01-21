import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { HomePage } from "../pages/Home"
import { Root } from "../pages/Root"

export const allRouters = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LoginPage />} />
      <Route path="home" element={<HomePage />} />
    </Route>
  )
)