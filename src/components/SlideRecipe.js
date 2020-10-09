import React from 'react'
import {Link} from 'react-router-dom'
const SlideRecipe = ({someRecipe}) => {

    const recipeImg = `https://spoonacular.com/recipeImages/${someRecipe.id}-636x393.jpg`

    return (
        <div>
            
            <Link to={`/${someRecipe.id}`}>
                
                <img src={recipeImg} alt='' />
            </Link>
            
            <h3>{someRecipe.title}</h3>
                
            
        </div>
    )
}

export default SlideRecipe
