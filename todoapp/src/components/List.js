//Hook-based React Practice Assignment
/*
List Object:
{
  name: string,
  tasks: [object]
}
*/
import React, { useState } from "react";

// THE COMPONENT =====================================================
export default function List(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.list.name}</h5>
        <p className="card-text">Tasks Remaining: {props.list.tasks.length}</p>
      </div>
    </div>
  )
}
