import React from 'react';
import "./TaskList.css"
import Task from "../Task/Task";

const TaskList = ({tasks}) => {
  return (
    <ul className="todo-list">
      {
        tasks.map(task => {
          return <Task props={task} />
        })
      }
    </ul>
  );
};

export default TaskList;