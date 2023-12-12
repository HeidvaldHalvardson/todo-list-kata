import React from 'react';
import ClearCompleted from "./ClearCompleted/ClearCompleted";
import TodoCount from "./TodoCount/TodoCount";
import TaskFilter from "./TaskFilter/TaskFilter";
import "./Footer.css"

const Footer = ({filterTodos, clear, leftCount}) => {
  return (
    <footer className="footer">
      <TodoCount leftCount={leftCount} />
      <TaskFilter filterTodos={filterTodos} />
      <ClearCompleted clear={clear} />
    </footer>
  );
};

export default Footer;