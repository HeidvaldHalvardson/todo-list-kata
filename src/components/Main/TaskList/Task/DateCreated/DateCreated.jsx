import React, { useEffect, useRef, useState } from 'react'
import './DateCreated.scss'
import { formatDistanceToNowStrict } from 'date-fns'

const DateCreated = ({ createdTask }) => {
  const [time, setTime] = useState(createdTask)
  const timerID = useRef()

  useEffect(() => {
    timerID.current = setInterval(tick, 5000)
    return () => clearInterval(timerID.current)
  }, [time])

  const tick = () => {
    const newNow = new Date(createdTask)
    setTime(newNow)
  }

  return <span className="created">{`created ${formatDistanceToNowStrict(time)} ago`}</span>
}

export default DateCreated
