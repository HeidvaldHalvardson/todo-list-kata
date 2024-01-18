import React from 'react'
import './App.scss'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

export default class App extends React.Component {
  item = 100

  state = {
    tasks: [
      { text: 'Completed task', active: false, edit: false, id: 1, timer: { minutes: 0, seconds: 0 } },
      { text: 'Editing task', active: true, edit: false, id: 2, timer: { minutes: 0, seconds: 0 } },
      { text: 'Active task', active: true, edit: false, id: 3, timer: { minutes: 0, seconds: 0 } },
    ],
    filterValue: 'All',
  }

  createTask(text, minutes, seconds) {
    return {
      text,
      active: true,
      edit: false,
      id: this.item++,
      timer: {
        minutes: minutes,
        seconds: seconds,
      },
    }
  }

  itemDelete(id) {
    this.setState(({ tasks }) => {
      const newTasks = tasks.filter((item) => item.id !== id)
      return {
        tasks: newTasks,
      }
    })
  }

  onLabelClick(id) {
    this.setState(({ tasks }) => {
      const index = tasks.findIndex((item) => item.id === id)
      const newTasks = tasks
      newTasks[index].active = !newTasks[index].active
      return {
        tasks: newTasks,
      }
    })
  }

  addTodo(text, minutes, seconds) {
    if (!text) {
      return
    }
    if (minutes === '') {
      minutes = 0
    }
    if (seconds === '') {
      seconds = 0
    }

    const newTask = this.createTask(text, minutes, seconds)

    this.setState(({ tasks }) => {
      return {
        tasks: [...tasks, newTask],
      }
    })
  }

  filterTodos = (value) => {
    this.setState(() => {
      return {
        filterValue: value,
      }
    })
  }

  clear = () => {
    this.setState(({ tasks }) => {
      const newTasks = tasks
      return {
        tasks: newTasks.filter((item) => item.active),
      }
    })
  }

  render() {
    const leftCount = this.state.tasks.filter((item) => item.active).length

    return (
      <div className="todoapp">
        <Header title="todos" addTodo={(text, minutes, seconds) => this.addTodo(text, minutes, seconds)} />
        <Main
          tasks={this.state.tasks}
          filterValue={this.state.filterValue}
          onDeleted={(id) => this.itemDelete(id)}
          onLabelClick={(id) => this.onLabelClick(id)}
        />
        <Footer filterTodos={this.filterTodos} clear={this.clear} leftCount={leftCount} />
      </div>
    )
  }
}
