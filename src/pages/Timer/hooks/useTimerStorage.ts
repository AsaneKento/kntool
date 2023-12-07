import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { timersState } from "../state"
import type { TimerStateType } from "../types"
import type { SetterOrUpdater } from "recoil"

interface UseTimerStorageReturnType {
  timers: TimerStateType[]
  setTimers: SetterOrUpdater<TimerStateType[]>
}

export const useTimerStorage = (): UseTimerStorageReturnType => {
  const [timers, setTimers] = useRecoilState(timersState)
  const [reload, setReload] = useState(false)

  const localStorageKey = "timers"

  useEffect(() => {
    const storedArray = localStorage.getItem(localStorageKey)

    if (storedArray != null) {
      setTimers(JSON.parse(storedArray))
      setReload(true)
    }
  }, [])

  useEffect(() => {
    if (reload) {
      localStorage.setItem(localStorageKey, JSON.stringify(timers))
    }
  }, [timers])

  return {
    timers,
    setTimers
  }
}
