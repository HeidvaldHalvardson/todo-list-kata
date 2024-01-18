import React from 'react'

import './NewTaskForm.scss'
import InputCustom from '../../UI/InputCustom/InputCustom'

export default class NewTaskForm extends React.Component {
  state = {
    task: '',
    minutes: '',
    seconds: '',
  }

  onChangeTask = (evt) => {
    this.setState({
      task: evt.target.value,
    })
  }

  onChangeMinutes = (evt) => {
    if (evt.target.value.length > 2) {
      evt.target.value = 99
    }
    if (evt.target.value < 0) {
      evt.target.value = 0
    }
    this.setState({
      minutes: evt.target.value,
    })
  }

  onChangeSeconds = (evt) => {
    if (evt.target.value.length > 2 || evt.target.value > 59) {
      evt.target.value = 59
    }

    if (evt.target.value < 0) {
      evt.target.value = 0
    }
    this.setState({
      seconds: evt.target.value,
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault()
    if (!this.state.task) {
      return
    }
    this.props.addTodo(this.state.task.trim(), this.state.minutes, this.state.seconds)
    this.setState({
      task: '',
      minutes: '',
      seconds: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <InputCustom style={{ width: '70%' }} placeholder="Task" value={this.state.task} onChange={this.onChangeTask} />
        <InputCustom
          style={{ width: '15%', paddingLeft: '16px' }}
          placeholder="Min"
          value={this.state.minutes}
          onChange={this.onChangeMinutes}
          type="number"
        />
        <InputCustom
          style={{ width: '15%', paddingLeft: '16px' }}
          placeholder="Sec"
          value={this.state.seconds}
          onChange={this.onChangeSeconds}
          type="number"
        />
        <input type="submit" hidden />
      </form>
    )
  }
}
