import { useTimerStorage } from "./useTimerStorage"

interface UseScheduleReturnType {
  title: string
  timeSecond: number
  expiryTimestamp: Date
}

export const useSchedule = (): UseScheduleReturnType => {
  const { timers, setTimers } = useTimerStorage()

  if (timers.length === 0) {
    const expiryTimestamp = new Date()
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 0)

    return {
      title: "No Title",
      timeSecond: 0,
      expiryTimestamp
    }
  }

  const timeSecond =
    parseInt(timers[0].hours, 10) * 3600 +
    parseInt(timers[0].minutes, 10) * 60 +
    parseInt(timers[0].seconds, 10)

  const title = timers[0].title === "" ? "No Title" : timers[0].title

  const expiryTimestamp = new Date()
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timeSecond)

  return {
    title,
    timeSecond,
    expiryTimestamp
  }
}
