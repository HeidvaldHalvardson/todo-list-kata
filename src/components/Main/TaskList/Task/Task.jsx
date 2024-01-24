import React, { useContext, useEffect, useRef, useState } from 'react'
import './Task.scss'
import PropTypes from 'prop-types'

import { Context } from '../../../../Context/Context'

import DateCreated from './DateCreated/DateCreated'

const Task = ({ task }) => {
  const { itemDelete, onLabelClick } = useContext(Context)
  const [timer, setTimer] = useState({
    minutes: task.timer.minutes,
    seconds: task.timer.seconds,
  })
  const [isTimerStart, setIsTimerStart] = useState(false)
  const [isActive, setIsActive] = useState(task.active)
  const timerId = useRef()

  const setTimerId = () => {
    let minutes = timer.minutes
    let seconds = timer.seconds
    if (minutes <= 0 && seconds <= 0) {
      clearInterval(timerId.current)
      return
    }

    seconds--

    if (seconds < 0) {
      minutes--
      seconds = 59
    }

    setTimer({
      minutes,
      seconds,
    })
  }

  useEffect(() => {
    if (isTimerStart) {
      timerId.current = setInterval(() => {
        startTimer()
      }, 1000)
      return () => clearInterval(timerId.current)
    }
  }, [timer, isTimerStart])

  const startTimer = () => {
    if (isActive && !isTimerStart) {
      setIsTimerStart(true)
    }

    if (isActive) {
      setTimerId()
    }
  }

  const pauseTimer = () => {
    setIsTimerStart(false)
    clearInterval(timerId.current)
  }

  const onLabelClickWithTimer = () => {
    setIsActive(!isActive)
    onLabelClick(task.id)
    if (isActive) {
      pauseTimer()
    }
  }

  const minutes = timer.minutes < 10 ? `0${+timer.minutes}` : timer.minutes
  const seconds = timer.seconds < 10 ? `0${+timer.seconds}` : timer.seconds

  return (
    <li className={`todo-item ${!isActive ? 'completed' : ''} ${task.edit ? 'editing' : ''}`}>
      {task.edit ? (
        <input type="text" className="edit" value={task.text} />
      ) : (
        <div className="view">
          <input className="toggle" type="checkbox" onClick={onLabelClickWithTimer} />
          <div className="task-description">
            <label onClick={onLabelClickWithTimer}>
              <span className="description">{task.text}</span>
            </label>
            <div className="task-timer">
              <button onClick={startTimer} className="icon icon-play" />
              <button onClick={pauseTimer} className="icon icon-pause" />
              <span>{`${minutes}:${seconds}`}</span>
            </div>
            <DateCreated createdTask={task.created} />
          </div>
          <button className="icon icon-edit" />
          <button className="icon icon-destroy" onClick={() => itemDelete(task.id)} />
        </div>
      )}
    </li>
  )
}

export default Task

Task.propTypes = {
  task: PropTypes.object,
}
