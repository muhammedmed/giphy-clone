import React from 'react'
import '../styles/SearchContainer.css'
import {BsSearch} from 'react-icons/bs'


const SearchContainer = () => {



  return (
    <div className="search_container">
        <input type="text" placeholder="Search all the GIFS and Stickers"  />
        <div className="search_icon">
          <BsSearch size={25}/>
        </div>
    </div>
  )
}

export default SearchContainer