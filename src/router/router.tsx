import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { LoginPage } from "../pages/Login"

export const allRouters = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LoginPage />}>
      </Route>
    )
)