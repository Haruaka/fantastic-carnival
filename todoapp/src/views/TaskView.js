//Hook-based React Practice Assignment
import React, { useState } from "react";
import Task from "../components/Task";

// THE COMPONENT =====================================================
export default function TaskView(props) {
  const [isEditing, setIsEditing] = useState(false);

  const turnOnEditMode = () => {
    setIsEditing(!isEditing);
  }

  if (isEditing) {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <input type="text" value={props.list.name} />
            <ul className="list-group">
              {props.list.tasks.map(task => {
                return <Task key={task.id} task={task} isEdit={true} />
              })}
            </ul>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={turnOnEditMode}>Return</button>
        <button type="button" className="btn btn-primary">+</button>
      </div>
    )
  }

  else {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1>{props.list.name}</h1>
            <ul className="list-group">
              {props.list.tasks.map(task => {
                return <Task key={task.id} task={task} isEdit={false} />
              })}
            </ul>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => props.changeView(0)}>Return</button>
        <button type="button" className="btn btn-danger" onClick={props.deleteList}>Delete List</button>
        <button type="button" className="btn btn-primary" onClick={turnOnEditMode}>Edit</button>
      </div>
    )
  }
}
