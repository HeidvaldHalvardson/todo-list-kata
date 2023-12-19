import React from 'react'
import './DateCreated.css'
import { formatDistanceToNowStrict } from 'date-fns'

export default class DateCreated extends React.Component {
  state = {
    now: new Date(),
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      now: this.state.now,
    })
  }

  render() {
    return <span className="created">{`created ${formatDistanceToNowStrict(this.state.now)} ago`}</span>
  }
}
