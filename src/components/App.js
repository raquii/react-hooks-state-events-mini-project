import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";


function App() {
  const [tasks, setTasks]= useState(TASKS)
  const [category, setCategory] = useState("All")

  function addTask(newTask){
    setTasks([...tasks, newTask]);
  }

  const filteredTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={category} 
        filterCategories={setCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(category => category !== "All")} 
        onTaskFormSubmit={addTask}
      />
      <TaskList 
        tasks={filteredTasks} 
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
