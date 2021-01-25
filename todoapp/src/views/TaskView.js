//Hook-based React Practice Assignment
import React, { useState } from "react";
import Task from "../components/Task";

// THE COMPONENT =====================================================
export default function TaskView(props) {

  return (
    <div class="container-fluid">
      {props.list.tasks.map(task => {
        return <Task key={task.id} task={task}/>
      })}
      <button type="button" className="btn btn-primary" onClick={() => props.changeView(0)}>Return</button>
    </div>
  )
}
