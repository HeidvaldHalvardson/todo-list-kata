import React from 'react';
import './App.css'

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default class App extends React.Component {

  item = 100

  state = {
    tasks: [
      {text: 'Completed task', active: false, edit: false, id: 1},
      {text: 'Editing task', active: true, edit: false, id: 2},
      {text: 'Active task', active: true, edit: false, id: 3}
    ],
    filterValue: 'All'
  }

  createTask(text) {
    return {
      text,
      active: true,
      edit: false,
      id: this.item++
    }
  }

  itemDelete (id) {
    this.setState(({tasks}) => {
      const index = tasks.findIndex(item => item.id === id)
      const newTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)]
      return {
        tasks: newTasks
      }
    })
  }

  onLabelClick (id) {
    this.setState(({tasks}) => {
      const index = tasks.findIndex(item => item.id === id)
      const newTasks = JSON.parse(JSON.stringify(tasks))
      newTasks[index].active = !newTasks[index].active
      return {
        tasks: newTasks
      }
    })
  }

  addTodo (value) {
    if (!value) {
      return
    }
    this.setState(({tasks}) => {
      const newTasks = [...tasks, this.createTask(value)]
      return {
        tasks: newTasks
      }
    })
  }

  filterTodos = (value) => {
    this.setState(() => {
      return {
        filterValue: value
      }
    })
  }

  clear = () => {
    this.setState(({tasks}) => {
      const newTasks = JSON.parse(JSON.stringify(tasks))
      return {
        tasks: newTasks.filter(item => item.active)
      }
    })
  }

  render() {
    const leftCount = this.state.tasks.filter(item => item.active).length

    return (
      <div className="todoapp">
        <Header title="todos" addTodo={(value) => this.addTodo(value)}/>
        <Main tasks={this.state.tasks} filterValue={this.state.filterValue} onDeleted={ (id) => this.itemDelete(id) } onLabelClick={ (id) => this.onLabelClick(id) } />
        <Footer filterTodos={this.filterTodos} clear={this.clear} leftCount={leftCount} />
      </div>
    )
  }
}