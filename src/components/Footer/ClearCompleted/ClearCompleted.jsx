import React from 'react'
import './ClearCompleted.css'

const ClearCompleted = ({ clear }) => {
  return (
    <button className="clear-completed" onClick={clear}>
      Clear completed
    </button>
  )
}

export default ClearCompleted
