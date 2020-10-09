import React from 'react'
import '../css/Recipe.css'

import { Link } from 'react-router-dom'
const Recipe = ({recipe, recipeId}) => {
    const recipeImg = `https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`
    

    return (
        
        <div className="recipe">
            <Link to={`/${recipeId}`}>
                
                <img src={recipeImg} alt='' />
            </Link>
            <div className="recipe_content">
            <h5>{recipe.title.length < 30 ? `${recipe.title}` : `${recipe.title.substring(0,35)}...`}</h5>
                
            </div>
            
        </div>
        
        
        

        
    )
}

export default Recipe
