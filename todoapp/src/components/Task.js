//Hook-based React Practice Assignment

/*
Task Object:
{
  id: number,
  task: string,
  isComplete: boolean,
}
*/
import React, { useState } from "react";

// THE COMPONENT =====================================================
export default function Task(props) {
  if (props.isEdit) {
    return (
      <li class="list-group-item">
        <input type="text" value={`${props.task.id} + ${props.task.desc}`}/>
        <button>delete</button>
      </li>
    )
  }
  return (
    <li class="list-group-item">{props.task.id} + {props.task.desc}</li>
  )
}
