import React from 'react';
import "./TaskList.css"
import Task from "../Task/Task";

const TaskList = ({tasks, onDeleted, onLabelClick}) => {
  return (
    <ul className="todo-list">
      {
        tasks.map(task => {
          return <Task key={task.id} props={task} onDeleted={() => onDeleted(task.id)}  onLabelClick={ () => onLabelClick(task.id)}/>
        })
      }
    </ul>
  );
};

export default TaskList;