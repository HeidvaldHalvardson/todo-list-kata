import React from "react";
import "./Header.css"

import MainTitle from "../UI/MainTitle/MainTitle"
import NewTaskForm from "./NewTaskForm/NewTaskForm";

const Header = ({title, addTodo}) => {
 return (
   <header>
     <MainTitle title={title} />
     <NewTaskForm addTodo={addTodo}/>
   </header>
 )
}

export default Header