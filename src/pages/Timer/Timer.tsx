import { type ReactElement } from "react"

import { TimeCounter } from "./components/Timer"

export function Timer (): ReactElement {
  const time = new Date()
  time.setSeconds(time.getSeconds() + 1000)

  return (
    <>
      <TimeCounter expiryTimestamp={time} timeSecond={1000} />
    </>
  )
}
