import { atom } from "recoil"
import type { TimerStateType } from "../types"

export const timersState = atom<TimerStateType[]>({
  key: "timersState",
  default: []
})
