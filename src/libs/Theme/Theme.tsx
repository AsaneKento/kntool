import type { ReactElement, ReactNode } from "react"
import { ThemeProvider, createTheme } from "@mui/material"

interface ThemeProps {
  children: ReactNode
}

export function Theme (props: ThemeProps): ReactElement {
  const { children } = props

  const theme = createTheme({})

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
