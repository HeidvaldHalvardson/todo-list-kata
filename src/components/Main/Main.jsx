import React from 'react'

import TaskList from './TaskList/TaskList'

import './Main.scss'

const Main = ({ tasks, filterValue, timer }) => {
  return (
    <main className="main">
      <TaskList tasks={tasks} filterValue={filterValue} timer={timer} />
    </main>
  )
}

export default Main
