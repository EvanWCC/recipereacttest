import React, { useContext, useState } from 'react';
import {RecipeContext} from '../context/RecipeContext';
import '../css/HomePage.css'
import Recipes from '../components/Recipes'
import Nav from '../components/Nav'
import Container from '@material-ui/core/Container';
import FoodSearch from '../components/FoodSearch';
import Country from '../components/Country';
import MealType from '../components/MealType';
import RecipesPagination from '../components/RecipesPagination'

// import SlideRecipes from '../components/SlideRecipes'
const HomePage = () => {
    const {recipes} = useContext(RecipeContext)
    // const slideRecipes = recipes.slice(0,9);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(20)
    const indexOflastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOflastRecipe - recipesPerPage
    const currentPageRecipes = recipes.slice(indexOfFirstRecipe, indexOflastRecipe)

    
    return (
        <div className="home">
            <Nav />
            <div className="home_main">
               
                <div className="main__recipes">
                    {/* <SlideRecipes someRecipes={slideRecipes} /> */}
                    <MealType />
                    <FoodSearch />
                    <Country />
                    <Container>
                        <Recipes recipes={currentPageRecipes} />
                    </Container>
                    <RecipesPagination recipesPerPage={recipesPerPage} totalRecipes={recipes.length} setCurrentPage={setCurrentPage} />
                </div>
                
            </div>
            
        </div>
        
    )
}

export default HomePage
