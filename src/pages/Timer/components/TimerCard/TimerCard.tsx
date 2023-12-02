import type { ReactElement } from "react"
import React from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Paper, Typography } from "@mui/material"
import { useTimeFormat } from "../../hooks/useTimeFormat"
import type { TimerStateType } from "../../types"

interface TimerCardProps {
  timer: TimerStateType
}

export function TimerCard (props: TimerCardProps): ReactElement {
  const { timer } = props
  const { format } = useTimeFormat()

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: timer.id })

  const cardStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: "1rem 2rem",
    cursor: "move",
    listStyle: "none",
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <Paper
      elevation={4}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      sx={cardStyle}
    >
      <Typography variant={"h5"}>{timer.title}</Typography>
      <Typography variant={"h5"}>
        {format(
          parseInt(timer.hours, 10),
          parseInt(timer.minutes, 10),
          parseInt(timer.seconds, 10)
        )}
      </Typography>
    </Paper>
  )
}
