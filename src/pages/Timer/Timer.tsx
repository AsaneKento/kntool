import { type ReactElement } from "react"

import { Box, Container, Grid } from "@mui/material"
import { EndTimerList } from "./components/EndTimerList"
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

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TimerList />
        </Grid>
        <Grid item xs={6}>
          <EndTimerList />
        </Grid>
      </Grid>
    </Container>
  )
}
