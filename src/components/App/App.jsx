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
      text: 'Active task',
      active: true,
      edit: false,
      id: 3,
      timer: { minutes: 1, seconds: 1 },
      created: new Date(),
    },
  ])
  const [filterValue, setFilterValue] = useState('All')
  const [id, setId] = useState(100)

  const createTask = (text, minutes, seconds) => {
    setId((id) => id + 1)
    return {
      text,
      active: true,
      edit: false,
      id,
      timer: {
        minutes,
        seconds,
      },
      created: new Date(),
      isTimerStart: false,
    }
  }

  const itemDelete = (id) => {
    setTasks((tasks) => {
      return tasks.filter((item) => item.id !== id)
    })
  }

  const onLabelClick = (id) => {
    setTasks((tasks) => {
      const index = tasks.findIndex((item) => item.id === id)
      tasks[index].active = !tasks[index].active
      return tasks
    })
  }

  const addTodo = (text, minutes, seconds) => {
    if (!text) {
      return
    }
    if (minutes === '') {
      minutes = 0
    }
    if (seconds === '') {
      seconds = 0
    }

    const newTask = createTask(text, minutes, seconds)

    setTasks((tasks) => {
      return [...tasks, newTask]
    })
  }

  const clear = () => {
    setTasks((tasks) => {
      return tasks.filter((item) => item.active)
    })
  }

  const leftCount = tasks.filter((item) => item.active).length

  return (
    <Context.Provider
      value={{
        onLabelClick,
        itemDelete,
      }}
    >
      <div className="todoapp">
        <Header title="todos" addTodo={(text, minutes, seconds) => addTodo(text, minutes, seconds)} />
        <Main tasks={tasks} filterValue={filterValue} />
        <Footer filterTodos={setFilterValue} clear={clear} leftCount={leftCount} />
      </div>
    </Context.Provider>
  )
}

export default App
