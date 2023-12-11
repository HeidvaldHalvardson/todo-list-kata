import React from 'react';
import './App.css'

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default class App extends React.Component {

  item = 100

  state = {
    tasks: [
      {text: 'Completed task', active: true, edit: false, id: 1},
      {text: 'Editing task', active: false, edit: false, id: 2},
      {text: 'Active task', active: false, edit: false, id: 3}
    ]
  }

  createTask(text) {
    return {
      text,
      active: false,
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
    this.setState(({tasks}) => {
      const newTasks = [...tasks, this.createTask(value)]
      return {
        tasks: newTasks
      }
    })
  }

  render() {
    return (
      <div className="todoapp">
        <Header title="todos" addTodo={(value) => this.addTodo(value)}/>
        <Main tasks={this.state.tasks} onDeleted={ (id) => this.itemDelete(id) } onLabelClick={ (id) => this.onLabelClick(id) } />
        <Footer />
      </div>
    )
  }
}