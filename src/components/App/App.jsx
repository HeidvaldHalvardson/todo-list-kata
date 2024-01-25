import React, { useState } from 'react'
import './App.scss'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { Context } from '../../Context/Context'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      text: 'Completed task',
      active: false,
      edit: false,
      id: 1,
      timer: { minutes: 0, seconds: 0 },
      created: new Date(),
    },
    {
      text: 'Editing task',
      active: true,
      edit: false,
      id: 2,
      timer: { minutes: 0, seconds: 0 },
      created: new Date(),
    },
    {
      text: 'With timer',
      active: true,
      edit: false,
      id: 3,
      timer: { minutes: 1, seconds: 1 },
      created: new Date(),
    },
  ])
  const [filterValue, setFilterValue] = useState('All')

  const leftCount = tasks.filter((item) => item.active).length

  return (
    <Context.Provider
      value={{
        setTasks,
      }}
    >
      <div className="todoapp">
        <Header title="todos" />
        <Main tasks={tasks} filterValue={filterValue} />
        <Footer filterTodos={setFilterValue} leftCount={leftCount} />
      </div>
    </Context.Provider>
  )
}

export default App
