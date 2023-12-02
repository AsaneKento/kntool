import { type ReactElement } from "react"

import { Box, Container } from "@mui/material"
import { TimeCounter } from "./components/Timer"
import { TimerForm } from "./components/TimerForm"
import { TimerList } from "./components/TimerList"

export function Timer (): ReactElement {
  return (
    <Container sx={{ p: "4rem" }}>
      <TimeCounter />
      <Box sx={{ mt: "2rem" }}>
        <TimerForm />
      </Box>

      <TimerList />
    </Container>
  )
}
