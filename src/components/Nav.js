import React, { useContext, useState } from 'react'
import '../css/Nav.css'



// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'

import { Link } from 'react-router-dom'
import { RecipeContext } from '../context/RecipeContext'
const Nav = () => {
  const [searchFood, setSearchFood] = useState('')
  const { setFood } = useContext(RecipeContext)

  
  
  const getNavRecipes = (e) => {
    e.preventDefault();
    setFood(searchFood);
  }


  return (
    <nav>
      <div className="nav__left">
          
          <div className="nav__brand">
            <h3>EvanWeb</h3>
            <span>Recipes</span>
          </div>
          <Link to="/">
            <HomeIcon className="homeIcon" style={{ fontSize: 40 }} />
          </Link>
      </div>
      <form className="nav__center" onSubmit={getNavRecipes}>
          <input type="text" value={searchFood} onChange={(e) => setSearchFood(e.target.value)}  />
          <SearchIcon />
      </form>
      <div className="nav__right">
        <p>cook your healthy life</p>
      </div>
    </nav>
  )
}

export default Nav
