import React from 'react'
// import SlideRecipe from './SlideRecipe';
import SlideRecipeUi from './SlideRecipeUi'
const SlideRecipes = ({someRecipes}) => {
  
  
  return (
    <div>
       {someRecipes.map((someRecipe) => (
        <SlideRecipeUi someRecipe={someRecipe} />
       ))}
    </div>
  )
}

export default SlideRecipes
