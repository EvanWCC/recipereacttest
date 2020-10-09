import React, {useContext} from 'react'
import {Paper, Button} from '@material-ui/core';
import { RecipeContext } from '../context/RecipeContext'
const MealType = () => {
    const { setType } = useContext(RecipeContext);
    return (
    <Paper>
        <Button onClick={(e) => setType("main course")}>Main Course</Button>
        <Button onClick={(e) => setType("dessert")}>Dessert</Button>
        <Button onClick={(e) => setType("appetizer")}>Appetizer</Button>
        <Button onClick={(e) => setType("salad")}>Salad</Button>
        <Button onClick={(e) => setType("soup")}>Soup</Button>
        <Button onClick={(e) => setType("side dish")}>Side Dish</Button>
    </Paper>
    )
}

export default MealType
