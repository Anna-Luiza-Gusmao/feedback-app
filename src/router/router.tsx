import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { LoginPage } from "../pages/Login"
import { HomePage } from "../pages/Home"

export const allRouters = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Route>
  )
)