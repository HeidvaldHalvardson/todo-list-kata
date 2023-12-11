import React from "react";
import "./Main.css"
import TaskList from "./TaskList/TaskList";

const Main = ({tasks, onDeleted, onLabelClick}) => {
  return (
    <main className="main">
      <TaskList tasks={tasks} onDeleted={onDeleted} onLabelClick={onLabelClick}/>
    </main>
  )
}

export default Main