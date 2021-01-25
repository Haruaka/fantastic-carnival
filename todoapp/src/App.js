//Hook-based React Practice Assignment
import React, { useState } from "react";

import ListView from "./views/ListView";
import TaskView from "./views/TaskView";

const data = [{ id: 1, name: "My To Do List", tasks: [{id: 2, desc: "Wash the Dishes", isComplete: false}, {id: 3, desc: "Do my Homework", isComplete: false}] }, { id: 2, name: "Another To Do List", tasks: [{id: 1, desc: "Clean my room", isComplete: false}] }, { id: 3, name: "Clone List", tasks: [{id: 1, desc: "Clean my room", isComplete: false}, {id: 2, desc: "Wash the Dishes", isComplete: false}, {id: 3, desc: "Do my Homework", isComplete: false}]}];

// THE COMPONENT =====================================================
export default function App() {
  const [viewState, setViewState] = useState(0);

  const changeView = (num) => { setViewState(num); }
  const getListData = (num) => { return data.find(list => { return list.id === num})}

  if (viewState > 0) {
    return <TaskView list={getListData(viewState)} changeView={changeView}/>
  }

  return <ListView lists={data} changeView={changeView}/>
}
