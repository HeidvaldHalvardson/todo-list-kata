import React from 'react'
import './TaskFilter.css'

const FilterButton = ({ text, handler, isActive }) => {
  return (
    <button type="button" onClick={handler} className={isActive ? 'selected' : null}>
      {text}
    </button>
  )
}

export default class TaskFilter extends React.Component {
  state = {
    buttons: [
      { text: 'All', isActive: true },
      { text: 'Active', isActive: false },
      { text: 'Completed', isActive: false },
    ],
  }

  clickHandler(id) {
    this.setState(({ buttons }) => {
      const index = id
      const newButtons = JSON.parse(JSON.stringify(buttons))
      newButtons.forEach((item, id) => {
        if (index === id) {
          item.isActive = !item.isActive
          this.props.filterTodos(item.text)
        } else {
          item.isActive = false
        }
      })
      return {
        buttons: newButtons,
      }
    })
  }

  render() {
    return (
      <ul className="filters">
        {this.state.buttons.map((item, id) => {
          return (
            <li key={id}>
              <FilterButton text={item.text} isActive={item.isActive} handler={() => this.clickHandler(id)} />
            </li>
          )
        })}
      </ul>
    )
  }
}
