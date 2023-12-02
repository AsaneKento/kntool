import { atom } from "recoil"
import type { TimerType } from "../types"

export const timersState = atom<TimerType[]>({
  key: "timersState",
  default: []
})
