import React from 'react';
import ClearCompleted from "./ClearCompleted/ClearCompleted";
import TodoCount from "./TodoCount/TodoCount";
import TaskFilter from "./TaskFilter/TaskFilter";
import "./Footer.css"
import PropTypes from "prop-types";

const Footer = ({filterTodos, clear, leftCount}) => {
  return (
    <footer className="footer">
      <TodoCount leftCount={leftCount} />
      <TaskFilter filterTodos={filterTodos} />
      <ClearCompleted clear={clear} />
    </footer>
  );
};

Footer.propTypes = {
  leftCount: PropTypes.number,
  filterTodos: PropTypes.func,
  clear: PropTypes.func
}

export default Footer;