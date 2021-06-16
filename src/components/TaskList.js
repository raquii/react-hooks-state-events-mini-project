import React from "react";
import Task from "./Task"

function TaskList({tasks, setTasks}) {
  function deleteTask(key){
    const updatedTasks = tasks.filter(task=> task.text !== key)
    setTasks(updatedTasks)
  }

  function listTasks(){
    return tasks.map(task=>{
      return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask}/>
    })
  }

  return (
    <div className="tasks">
      {listTasks()}
    </div>
  );
}

export default TaskList;
