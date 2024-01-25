import React from 'react'
import PropTypes from 'prop-types'

import MainTitle from '../UI/MainTitle/MainTitle'

import NewTaskForm from './NewTaskForm/NewTaskForm'

import './Header.scss'

const Header = ({ title }) => {
  return (
    <header>
      <MainTitle title={title} />
      <NewTaskForm />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
