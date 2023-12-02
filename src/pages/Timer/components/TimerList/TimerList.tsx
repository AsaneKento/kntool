import type { ReactElement } from "react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from "@dnd-kit/sortable"
import { Stack } from "@mui/material"
import { useTimerStorage } from "../../hooks/useTimerStorage"
import { TimerCard } from "../TimerCard"
import type { DragEndEvent } from "@dnd-kit/core"

export function TimerList (): ReactElement {
  const { timers, setTimers } = useTimerStorage()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event

    if (over === null) {
      return
    }

    if (active.id !== over.id) {
      const oldIndex = timers.findIndex((v) => v.id === active.id)
      const newIndex = timers.findIndex((v) => v.id === over.id)
      setTimers(arrayMove(timers, oldIndex, newIndex))
    }
  }

  return (
    <Stack sx={{ mt: "4rem" }} spacing={2}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={timers} strategy={verticalListSortingStrategy}>
          {timers.map((timer) => (
            <TimerCard timer={timer} key={timer.id} />
          ))}
        </SortableContext>
      </DndContext>
    </Stack>
  )
}
