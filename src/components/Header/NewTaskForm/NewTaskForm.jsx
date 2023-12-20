import React from 'react'
import './NewTaskForm.scss'

export default class NewTaskForm extends React.Component {
  state = {
    value: '',
  }

  onChange = (evt) => {
    this.setState({
      value: evt.target.value,
    })
  }

  render() {
    return (
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          this.props.addTodo(this.state.value.trim())
          this.setState({ value: '' })
        }}
      >
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.value}
          onChange={this.onChange}
        />
      </form>
    )
  }
}
