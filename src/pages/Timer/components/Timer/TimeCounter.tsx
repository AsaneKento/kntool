import type { ReactElement } from "react"
import {
  PauseRounded,
  PlayArrowRounded
} from "@mui/icons-material"
import {
  Box,
  Container,
  IconButton,
  LinearProgress,
  Typography
} from "@mui/material"
import { useTimer } from "react-timer-hook"

interface TimeCounterProps {
  expiryTimestamp: Date
  timeSecond: number
}

export function TimeCounter (props: TimeCounterProps): ReactElement {
  const { expiryTimestamp, timeSecond } = props

  const { totalSeconds, seconds, minutes, hours, isRunning, start, pause } =
    useTimer({
      expiryTimestamp,
      autoStart: false
    })

  const progressPercentage = (totalSeconds / timeSecond) * 100

  const handleClickStart = (): void => {
    if (isRunning) {
      pause()
    } else {
      start()
    }
  }

  const formatHour = String(hours).padStart(2, "0")
  const formatMinte = String(minutes).padStart(2, "0")
  const formatSecond = String(seconds).padStart(2, "0")
  const formatTime = `${formatHour}:${formatMinte}:${formatSecond}`

  return (
    <Container maxWidth={"sm"}>
      <Box sx={{ textAlign: "center" }}>
        <Typography>Title</Typography>
        <Typography variant={"h2"}>{formatTime}</Typography>
      </Box>
      <LinearProgress
        variant={"determinate"}
        value={progressPercentage}
        sx={{ height: 10, borderRadius: 5 }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 2
        }}
      >
        <IconButton onClick={handleClickStart}>
          {!isRunning
            ? (
            <PlayArrowRounded sx={{ fontSize: "3rem", color: "black" }} />
              )
            : (
            <PauseRounded sx={{ fontSize: "3rem", color: "black" }} />
              )}
        </IconButton>
      </Box>
    </Container>
  )
}
