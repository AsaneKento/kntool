import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { timersState } from "../state"
import type { TimerType } from "../types"
import type { SetterOrUpdater } from "recoil"

interface UseTimerStorageReturnType {
  timers: TimerType[]
  setTimers: SetterOrUpdater<TimerType[]>
}

export const useTimerStorage = (): UseTimerStorageReturnType => {
  const [timers, setTimers] = useRecoilState(timersState)

  const localStorageKey = "timers"

  useEffect(() => {
    const storedArray = localStorage.getItem(localStorageKey)

    if (storedArray != null) {
      setTimers(JSON.parse(storedArray))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(timers))
  }, [timers])

  return {
    timers,
    setTimers
  }
}
