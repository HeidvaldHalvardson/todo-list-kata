import React from 'react'
import PropTypes from 'prop-types'

import Task from './Task/Task'
import './TaskList.scss'

const TaskList = ({ tasks, onDeleted, onLabelClick, filterValue }) => {
  let filterTasks = [...tasks]
  switch (filterValue) {
    case 'Active':
      filterTasks = filterTasks.filter((item) => item.active)
      break
    case 'Completed':
      filterTasks = filterTasks.filter((item) => !item.active)
      break
    default:
      break
  }

  return (
    <ul className="todo-list">
      {filterTasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            onDeleted={() => onDeleted(task.id)}
            onLabelClick={() => onLabelClick(task.id)}
          />
        )
      })}
    </ul>
  )
}

TaskList.defaultProps = {
  onLabelClick: () => {},
}

TaskList.propTypes = {
  onLabelClick: PropTypes.func,
  onDeleted: PropTypes.func,
  filterValue: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
}

export default TaskList
