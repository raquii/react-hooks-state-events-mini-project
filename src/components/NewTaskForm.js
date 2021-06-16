import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text:"",
    category:"Code"
  })

  const categoryOptions = categories.map(category=>{
    return <option key={category} name={category}>{category}</option>
  })

  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({
      text:"",
      category:"Code"
    })
  }

  function handleChange(e){
    const key = e.target.name;
    const value = e.target.value
    setFormData({
      ...formData,
      [key]: value
    })
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
