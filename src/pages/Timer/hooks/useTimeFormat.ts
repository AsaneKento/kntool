interface UseTimeFormatReturnType {
  format: (hours: number, minutes: number, seconds: number) => string
}

export const useTimeFormat = (): UseTimeFormatReturnType => {
  const format = (hours: number, minutes: number, seconds: number): string => {
    const formatHour = String(hours).padStart(2, "0")
    const formatMinte = String(minutes).padStart(2, "0")
    const formatSecond = String(seconds).padStart(2, "0")

    return `${formatHour}:${formatMinte}:${formatSecond}`
  }

  return { format }
}
