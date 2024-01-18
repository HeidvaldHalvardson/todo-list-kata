import React from 'react'
import './Task.scss'
import PropTypes from 'prop-types'

import DateCreated from './DateCreated/DateCreated'

export default class Task extends React.Component {
  state = {
    minutes: null,
    seconds: null,
    isTimerStart: false,
  }

  componentDidMount() {
    this.setState({
      minutes: this.props.task.timer.minutes,
      seconds: this.props.task.timer.seconds,
    })
  }

  setTimer = () => {
    let minutes = this.state.minutes
    let seconds = this.state.seconds

    if (minutes <= 0 && seconds <= 0) {
      return
    }

    seconds--

    if (seconds < 0) {
      minutes--
      seconds = 59
    }

    this.setState({
      minutes,
      seconds,
    })
  }

  startTimer = () => {
    if (this.props.task.active && !this.state.isTimerStart) {
      this.setState({
        isTimerStart: true,
      })
      this.timer = setInterval(() => {
        this.setTimer()
      }, 1000)
    }
  }

  pauseTimer = () => {
    clearInterval(this.timer)
    this.setState({
      isTimerStart: false,
    })
  }

  onLabelClickWithTimer = () => {
    this.props.onLabelClick()
    this.pauseTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const minutes = this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes
    const seconds = this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds
    const { task, onDeleted } = this.props

    return (
      <li className={`todo-item ${!task.active ? 'completed' : ''} ${task.edit ? 'editing' : ''}`}>
        {task.edit ? (
          <input type="text" className="edit" value={task.text} />
        ) : (
          <div className="view">
            <input className="toggle" type="checkbox" onClick={this.onLabelClickWithTimer} />
            <div className="task-description">
              <label onClick={this.onLabelClickWithTimer}>
                <span className="description">{task.text}</span>
              </label>
              <div className="task-timer">
                <button onClick={this.startTimer} className="icon icon-play" />
                <button onClick={this.pauseTimer} className="icon icon-pause" />
                <span>{`${minutes}:${seconds}`}</span>
              </div>
              <DateCreated />
            </div>
            <button className="icon icon-edit" />
            <button className="icon icon-destroy" onClick={onDeleted} />
          </div>
        )}
      </li>
    )
  }
}

Task.defaultProps = {
  onLabelClick: () => {},
}

Task.propTypes = {
  onLabelClick: PropTypes.func,
  onDeleted: PropTypes.func,
  task: PropTypes.object,
}
