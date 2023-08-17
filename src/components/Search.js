import React from 'react'
import "./Search.css"
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <div className='searchbar'>
      <input type="text" placeholder='Search stars, planets and astronomical events'/>
      <SearchIcon/>
    </div>
  )
}
