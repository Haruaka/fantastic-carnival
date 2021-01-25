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
  return (
    <div class="container">
      {props.task.id} + {props.task.desc}
    </div>
  )
}
