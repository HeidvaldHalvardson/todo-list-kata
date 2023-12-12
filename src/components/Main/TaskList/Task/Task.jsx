import React from 'react';
import "./Task.css"

const Task = ({props, onDeleted, onLabelClick}) => {

  return (
    <li
      key={props.id}
      className={`${!props.active ? 'completed' : null} ${props.edit ? 'editing' : null}`}>
      {props.edit
        ?
        <input type="text" className="edit" value={props.text} />
        :
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>
            <span
              className="description"
              onClick={ onLabelClick }>
              {props.text}
            </span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit" />
          <button
            className="icon icon-destroy"
            onClick={ onDeleted } />
        </div>
      }
    </li>
  );
};

export default Task;