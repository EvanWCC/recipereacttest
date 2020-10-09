import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'
import axios from 'axios'
import DetailPageUi from '../components/DetailPageUi'
import Nav from '../components/Nav'

const DetailPage = () => {
    
    
    const [recipe, setRecipe] = useState([])
    const [recipeSumary, setRecipeSumary] = useState('')
    
    let { recipeId } = useParams();
    
    useEffect(() => {
        async function getData() {
            const request = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=41b43eb0b8a44f078a40831dc9a102a7`);
            
            setRecipe(request.data)
            
        }
        getData();
    },[recipeId])

    

    console.log(recipeSumary)


    https://api.spoonacular.com/recipes/4632/summary

    
    
    return (
        <>
        <Nav />
        <DetailPageUi key={recipe.id} recipe={recipe} />
        </>
    )
}

export default DetailPage
