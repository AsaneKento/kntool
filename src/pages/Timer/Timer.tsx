import { type ReactElement } from "react"

import { Box, Container } from "@mui/material"
import { TimeCounter } from "./components/Timer"
import { TimerForm } from "./components/TimerForm"

export function Timer (): ReactElement {
  return (
    <Container sx={{ p: "4rem" }}>
      <TimeCounter />
      <Box sx={{ mt: "2rem" }}>
        <TimerForm />
      </Box>
    </Container>
  )
}
