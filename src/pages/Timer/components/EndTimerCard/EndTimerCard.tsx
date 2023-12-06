import type { ReactElement } from "react"
import { Paper, Typography } from "@mui/material"
import { useTimeFormat } from "../../hooks/useTimeFormat"
import type { TimerStateType } from "../../types"

interface EndTimerCardProps {
  timer: TimerStateType
}

export function EndTimerCard (props: EndTimerCardProps): ReactElement {
  const { timer } = props
  const { format } = useTimeFormat()

  const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "1rem 2rem",
    listStyle: "none"
  }

  return (
    <Paper elevation={4} sx={cardStyle}>
      <Typography variant={"h5"}>{timer.title}</Typography>
      <Typography variant={"h5"}>
        {format(
          parseInt(timer.hours, 10),
          parseInt(timer.minutes, 10),
          parseInt(timer.seconds, 10)
        )}
      </Typography>
    </Paper>
  )
}
