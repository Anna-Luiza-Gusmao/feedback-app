import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/globalStyles"
import { RouterProvider } from "react-router-dom"
import { allRouters } from "./router/router"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={allRouters} />

      <GlobalStyle />
    </ThemeProvider>
  )
}