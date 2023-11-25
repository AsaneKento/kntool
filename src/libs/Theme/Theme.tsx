import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

interface ThemeProps {
  children: ReactNode
}

export function Theme(props: ThemeProps) {
  const { children } = props

  const theme = createTheme({})

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
