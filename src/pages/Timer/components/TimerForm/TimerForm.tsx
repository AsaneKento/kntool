import { type ReactElement } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@mui/material"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useTimerStorage } from "../../hooks/useTimerStorage"
import type { TimerType } from "../../types"

const timerFormSchema = z.object({
  title: z.string(),
  hours: z.string(),
  minutes: z.string(),
  seconds: z.string()
}).refine((data) => {
  return data.hours !== "00" || data.minutes !== "00" || data.seconds !== "00"
}, {
  message: "時間を入力してください"
})

export function TimerForm (): ReactElement {
  const { timers, setTimers } = useTimerStorage()

  const { register, handleSubmit, reset } = useForm<TimerType>({
    mode: "onBlur",
    resolver: zodResolver(timerFormSchema)
  })

  const onSubmit = (data: TimerType): void => {
    const title = data.title
    const hours = data.hours
    const minutes = data.minutes
    const seconds = data.seconds

    setTimers([...timers, { title, hours, minutes, seconds }])
    reset()
  }

  return (
    <Box
      component={"form"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <TextField
        placeholder={"タイトル"}
        type={"text"}
        sx={{ mr: "1rem" }}
        {...register("title")}
      />
      <Select defaultValue={"00"} {...register("hours")}>
        {renderMenuItems()}
      </Select>
      <Typography variant={"h4"}>:</Typography>
      <Select defaultValue={"00"} {...register("minutes")}>
        {renderMenuItems()}
      </Select>
      <Typography variant={"h4"}>:</Typography>
      <Select defaultValue={"00"} {...register("seconds")}>
        {renderMenuItems()}
      </Select>
      <Button
        onClick={handleSubmit(onSubmit)}
        size={"large"}
        variant={"contained"}
        sx={{ ml: "1rem" }}
      >
        Add
      </Button>
    </Box>
  )
}

const renderMenuItems = (): ReactElement[] => {
  const menuItems = []

  for (let i = 0; i < 60; i++) {
    const value = i.toString().padStart(2, "0")

    menuItems.push(
      <MenuItem key={value} value={value}>
        {value}
      </MenuItem>
    )
  }

  return menuItems
}
