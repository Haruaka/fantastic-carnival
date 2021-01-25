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
    <div class="container">
      List Name {props.list.name}
    </div>
  )
}
