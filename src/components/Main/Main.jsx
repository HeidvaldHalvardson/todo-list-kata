import React from "react";
import "./Main.css"
import TaskList from "./TaskList/TaskList";

const Main = ({tasks, onDeleted, onLabelClick, filterValue}) => {
  return (
    <main className="main">
      <TaskList tasks={tasks} onDeleted={onDeleted} onLabelClick={onLabelClick} filterValue={filterValue}/>
    </main>
  )
}

export default Main