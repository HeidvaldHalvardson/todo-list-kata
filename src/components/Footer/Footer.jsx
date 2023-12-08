import React from 'react';
import ClearCompleted from "./ClearCompleted/ClearCompleted";
import TodoCount from "./TodoCount/TodoCount";
import TaskFilter from "./TaskFilter/TaskFilter";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <TodoCount />
      <TaskFilter />
      <ClearCompleted />
    </footer>
  );
};

export default Footer;