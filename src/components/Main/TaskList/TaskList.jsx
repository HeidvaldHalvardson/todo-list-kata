import React from 'react';
import "./TaskList.css"
import Task from "./Task/Task";

const TaskList = ({tasks, onDeleted, onLabelClick, filterValue}) => {
  let filterTasks = [...tasks]
  switch (filterValue) {
    case 'Active':
      filterTasks = filterTasks.filter(item => item.active)
      break
    case 'Completed':
      filterTasks = filterTasks.filter(item => !item.active)
      break
    default:
      break
  }

  return (
    <ul className="todo-list">
      {
        filterTasks.map(task => {
          return <Task key={task.id} props={task} onDeleted={() => onDeleted(task.id)}  onLabelClick={ () => onLabelClick(task.id)} />
        })
      }
    </ul>
  );
};

export default TaskList;

