import type { ReactElement } from "react"
import { CssBaseline } from "@mui/material"
import { Theme } from "~/libs/Theme"
import { Timer } from "./pages/Timer"

function App (): ReactElement {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 1000)

  return (
    <Theme>
      <CssBaseline />
      <Timer />
    </Theme>
  )
}

export default App
