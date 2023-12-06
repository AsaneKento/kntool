import { atom } from "recoil"
import type { TimerStateType } from "../types"

export const endTimerState = atom<TimerStateType[]>({
  key: "endTimerState",
  default: []
})
