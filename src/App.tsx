import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/globalStyles"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Feedback App</h1>

      <GlobalStyle />
    </ThemeProvider>
  )
}