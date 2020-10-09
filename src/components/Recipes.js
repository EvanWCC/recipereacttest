import React from 'react'
// import { RecipeContext } from '../context/RecipeContext';
import Recipe from '../components/Recipe';
// import DetailPage from '../pages/DetailPage'
// import { Route, Switch } from 'react-router-dom'
const Recipes = ({recipes}) => {
    
    // const { recipes } = useContext(RecipeContext);
    
  
    return (
        <>
        
            <div className="recipes">
                {recipes.map((recipe) => {
                    return <Recipe key={recipe.id} recipe={recipe} recipeId={recipe.id} />
                         
                })}
            </div>
   
        {/* <Switch>
            
            <Route path=":recipeId">
                {recipes.map((recipe) => {
                    return <DetailPage recipe={recipe} recipeId={recipe.id}  />
                })}
            </Route>
        </Switch> */}
        </>
    )
}

export default Recipes
