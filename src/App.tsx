import type { ReactElement } from "react"
import { CssBaseline } from "@mui/material"
import { RecoilRoot } from "recoil"
import { Theme } from "~/libs/Theme"
import { Timer } from "./pages/Timer"

function App (): ReactElement {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 1000)

  return (
    <RecoilRoot>
      <Theme>
        <CssBaseline />
        <Timer />
      </Theme>
    </RecoilRoot>
  )
}

export default App
