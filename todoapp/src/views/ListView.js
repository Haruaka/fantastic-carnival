//Hook-based React Practice Assignment
import React, { useState } from "react";
import List from "../components/List";

// THE COMPONENT =====================================================
export default function ListView(props) {
  return (
    <div class="container-fluid">
      {props.lists.map(list => {
        return <List key={list.id} list={list}/>
      })}
      <button type="button" className="btn btn-primary" onClick={() => props.changeView(1)}>Test</button>
      <button type="button" className="btn btn-primary">+</button>
    </div>
  )
}
/*
      {props.lists.forEach(list => {
        return <List data={list}/>
      })}
*/
