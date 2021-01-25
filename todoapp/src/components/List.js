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
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{props.list.name}</h5>
        <p class="card-text">Tasks Remaining: {props.list.tasks.length}</p>
      </div>
    </div>
  )
}
