import React from "react";
import "./Header.css"

import MainTitle from "../UI/MainTitle/MainTitle"
import NewTaskForm from "./NewTaskForm/NewTaskForm";

const Header = ({title}) => {
 return (
   <header>
     <MainTitle title={title} />
     <NewTaskForm />
   </header>
 )
}

export default Header