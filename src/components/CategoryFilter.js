import React from "react";

function CategoryFilter({categories, selectedCategory, filterCategories}) {

  const categoryButtons = categories.map(category=>{
    const className = category === selectedCategory ? "selected" : null;

    return( 
      <button 
        key={category}
        name={category} 
        className={className}
        onClick={()=> filterCategories(category)}
      >
          {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
