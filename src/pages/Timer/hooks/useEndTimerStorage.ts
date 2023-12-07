import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { endTimerState } from "../state"
import type { TimerStateType } from "../types"
import type { SetterOrUpdater } from "recoil"

interface UseEndTimerStorageReturnType {
  endTimers: TimerStateType[]
  setEndTimers: SetterOrUpdater<TimerStateType[]>
}

export const useEndTimerStorage = (): UseEndTimerStorageReturnType => {
  const [endTimers, setEndTimers] = useRecoilState(endTimerState)
  const [reload, setReload] = useState(false)

  const localStorageKey = "end-timer"

  useEffect(() => {
    const storedArray = localStorage.getItem(localStorageKey)

    if (storedArray != null) {
      setEndTimers(JSON.parse(storedArray))
      setReload(true)
    }
  }, [])

  useEffect(() => {
    if (reload) {
      localStorage.setItem(localStorageKey, JSON.stringify(endTimers))
    }
  }, [endTimers])

  return {
    endTimers,
    setEndTimers
  }
}
