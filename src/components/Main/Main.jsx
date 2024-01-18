import React from 'react'

import TaskList from './TaskList/TaskList'

import './Main.scss'

const Main = ({ tasks, onDeleted, onLabelClick, filterValue, timer }) => {
  return (
    <main className="main">
      <TaskList
        tasks={tasks}
        onDeleted={onDeleted}
        onLabelClick={onLabelClick}
        filterValue={filterValue}
        timer={timer}
      />
    </main>
  )
}

export default Main
