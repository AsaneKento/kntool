import type { ReactElement } from "react"
import { PauseRounded, PlayArrowRounded } from "@mui/icons-material"
import {
  Box,
  Container,
  IconButton,
  LinearProgress,
  Typography
} from "@mui/material"
import { useTimer } from "react-timer-hook"
import { useSetRecoilState } from "recoil"
import { useEndTimerStorage } from "../../hooks/useEndTimerStorage"
import { useSchedule } from "../../hooks/useSchedule"
import { useTimeFormat } from "../../hooks/useTimeFormat"
import { useTimerStorage } from "../../hooks/useTimerStorage"
import { doingTimerState } from "../../state"

export function TimeCounter (): ReactElement {
  const { format } = useTimeFormat()
  const { timers, setTimers } = useTimerStorage()
  const { endTimers, setEndTimers } = useEndTimerStorage()
  const { title, timeSecond, expiryTimestamp } = useSchedule()
  const setDoingTimer = useSetRecoilState(doingTimerState)

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    restart
  } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      setEndTimers([timers[0], ...endTimers])
      setTimers([...timers.slice(1)])
    }
  })

  if (timers.length !== 0 && totalSeconds === 0) {
    restart(expiryTimestamp, false)
  }

  const progressPercentage =
    totalSeconds === 0 ? 0 : Math.floor((totalSeconds / timeSecond) * 100)

  const handleClickStart = (): void => {
    if (isRunning) {
      pause()
    } else {
      start()
      setDoingTimer(timers[0].id)
    }
  }

  return (
    <Container maxWidth={"sm"}>
      <Box sx={{ textAlign: "center" }}>
        <Typography>{title}</Typography>
        <Typography variant={"h2"}>
          {format(hours, minutes, seconds)}
        </Typography>
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
