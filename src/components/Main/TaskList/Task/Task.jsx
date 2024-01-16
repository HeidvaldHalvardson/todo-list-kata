import React from 'react'
import './Task.scss'
import PropTypes from 'prop-types'

import DateCreated from './DateCreated/DateCreated'

export default class Task extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    isTimerStart: false,
  }

  setTimer = () => {
    let minutes = this.state.minutes
    let seconds = this.state.seconds

    seconds++

    if (seconds > 59) {
      minutes++
      seconds = 0
    }

    this.setState({
      minutes,
      seconds,
    })
  }

  startTimer = () => {
    if (this.props.props.active && !this.state.isTimerStart) {
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

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const minutes = this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes
    const seconds = this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds
    const { props, onDeleted, onLabelClick } = this.props
    return (
      <li key={props.id} className={`todo-item ${!props.active ? 'completed' : ''} ${props.edit ? 'editing' : ''}`}>
        {props.edit ? (
          <input type="text" className="edit" value={props.text} />
        ) : (
          <div className="view">
            <input className="toggle" type="checkbox" onClick={onLabelClick} />
            <div className="task-description">
              <label onClick={onLabelClick}>
                <span className="description">{props.text}</span>
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
  props: PropTypes.object,
}
