import React from 'react'
import './ClearCompleted.scss'
import PropTypes from 'prop-types'

const ClearCompleted = ({ clear }) => {
  return (
    <button className="clear-completed" onClick={clear}>
      Clear completed
    </button>
  )
}

ClearCompleted.propTypes = {
  clear: PropTypes.func,
}

export default ClearCompleted
