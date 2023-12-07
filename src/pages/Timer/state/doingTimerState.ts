import { atom } from "recoil"

export const doingTimerState = atom<string | null>({
  key: "doingTimerState",
  default: null
})
