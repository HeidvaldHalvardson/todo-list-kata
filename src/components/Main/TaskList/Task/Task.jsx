import React from 'react';
import "./Task.css"
import PropTypes from "prop-types";

import DateCreated from "./DateCreated/DateCreated";

export default class Task extends React.Component {
  render() {
    const {props, onDeleted, onLabelClick} = this.props
    return (
      <li
        key={props.id}
        className={`todo-item ${!props.active ? 'completed' : ''} ${props.edit ? 'editing' : ''}`}>
        {props.edit
          ?
          <input type="text" className="edit" value={props.text} />
          :
          <div className="view">
            <input className="toggle" type="checkbox" onClick={  onLabelClick } />
            <label onClick={ onLabelClick }>
              <span className="description">
                {props.text}
              </span>
              <DateCreated />
            </label>
            <button className="icon icon-edit" />
            <button
              className="icon icon-destroy"
              onClick={ onDeleted } />
          </div>
        }
      </li>
    );
  }
};

Task.defaultProps = {
  onLabelClick: () => {}
}

Task.propTypes = {
  onLabelClick: PropTypes.func,
  onDeleted: PropTypes.func,
  props: PropTypes.object
}
