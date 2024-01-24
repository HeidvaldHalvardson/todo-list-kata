import React, { useMemo, useState } from 'react'

import './NewTaskForm.scss'
import InputCustom from '../../UI/InputCustom/InputCustom'

const NewTaskForm = ({ addTodo }) => {
  const initialTimer = useMemo(
    () => ({
      minutes: '',
      seconds: '',
    }),
    []
  )

  const [task, setTask] = useState('')
  const [timer, setTimer] = useState(initialTimer)

  const onChangeMinutes = (evt) => {
    let minutes = evt.target.value

    if (minutes.length > 2) {
      minutes = '99'
    }
    if (minutes < 0) {
      minutes = '0'
    }

    setTimer((timer) => {
      return {
        ...timer,
        minutes,
      }
    })
  }

  const onChangeSeconds = (evt) => {
    let seconds = evt.target.value

    if (seconds.length > 2 || seconds > 59) {
      seconds = '59'
    }

    if (seconds < 0) {
      seconds = '0'
    }

    setTimer((timer) => {
      return {
        ...timer,
        seconds,
      }
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    if (!task) {
      return
    }
    addTodo(task.trim(), timer.minutes, timer.seconds)
    setTask('')
    setTimer(initialTimer)
  }

  return (
    <form onSubmit={onSubmit}>
      <InputCustom
        style={{ width: '70%' }}
        placeholder="Task"
        value={task}
        onChange={(evt) => setTask(evt.target.value)}
      />
      <InputCustom
        style={{ width: '15%', paddingLeft: '16px' }}
        placeholder="Min"
        value={timer.minutes}
        onChange={onChangeMinutes}
        type="number"
      />
      <InputCustom
        style={{ width: '15%', paddingLeft: '16px' }}
        placeholder="Sec"
        value={timer.seconds}
        onChange={onChangeSeconds}
        type="number"
      />
      <input type="submit" hidden />
    </form>
  )
}

export default NewTaskForm
