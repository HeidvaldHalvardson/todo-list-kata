import React from 'react'
import './TodoCount.scss'

const TodoCount = ({ leftCount }) => {
  return <span className="todo-count">{leftCount} items left</span>
}

export default TodoCount
