import React from 'react';
import "./TodoCount.css"

const TodoCount = ({leftCount}) => {

  return <span className="todo-count">{leftCount} items left</span>
};

export default TodoCount;