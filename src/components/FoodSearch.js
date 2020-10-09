import React, { useContext } from 'react'
import {Paper, Button} from '@material-ui/core';
import { RecipeContext } from '../context/RecipeContext';
const FoodSearch = () => {
    const { setFood } = useContext(RecipeContext);
   
    return (
        <Paper>
            <Button onClick={(e) => setFood("chicken")}>Chicken</Button>
            <Button onClick={(e) => setFood("beef")}>Beef</Button>
            <Button onClick={(e) => setFood("seafood")}>seafood</Button>
            <Button onClick={(e) => setFood("vegetable")}>Vegetable</Button>
                     
            
        </Paper>
    )
}


export default FoodSearch
