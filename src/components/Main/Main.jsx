import React from "react";
import "./Main.css"
import TaskList from "./TaskList/TaskList";

const Main = ({tasks}) => {
  return (
    <main className="main">
      <TaskList tasks={tasks}/>
    </main>
  )
}

export default Main