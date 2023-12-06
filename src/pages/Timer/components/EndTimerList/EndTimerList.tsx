import type { ReactElement } from "react"
import { Stack } from "@mui/material"
import { useEndTimerStorage } from "../../hooks/useEndTimerStorage"
import { EndTimerCard } from "../EndTimerCard"

export function EndTimerList (): ReactElement {
  const { endTimers } = useEndTimerStorage()

  return (
    <Stack sx={{ mt: "4rem" }} spacing={2}>
      {endTimers.map((timer) => (
        <EndTimerCard timer={timer} key={timer.id} />
      ))}
    </Stack>
  )
}
