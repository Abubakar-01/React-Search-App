import React, { useState } from 'react'
import "./SearchBar.css"
function SearchBar({onSubmit}) {
  const [term,setTerm]=useState("");
  const  handleFormSubmit = (event) =>{
    event.preventDefault();
   onSubmit(term)
  }
  const handleInputChange = (event) =>{
    setTerm(event.target.value)
  }
  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <label>Enter search term</label>
        <input onChange={handleInputChange} value={term} />
      </form>
    </div>
  )
}

export default SearchBar