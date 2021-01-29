//Hook-based React Practice Assignment
import React, { useState } from "react";
import List from "../components/List";

// THE COMPONENT =====================================================
export default function ListView(props) {
  return (
    <div class="container-fluid">
      <div class="row row-cols-3">
        {props.lists.map(list => {
          return <div className="col" onClick={() => props.changeView(list.id)}>
            <List key={list.id} list={list}/>
          </div>
        })}
      </div>
      <button type="button" className="btn btn-primary" onClick={props.addList}>+</button>
    </div>
  )
}
/*
      {props.lists.forEach(list => {
        return <List data={list}/>
      })}
*/
