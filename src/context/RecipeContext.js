




import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    const[recipes, setRecipes] = useState([]);
    const[food, setFood] = useState("");
    const[country, setCountry] = useState("")
    const[type, setType] = useState("")
    
    useEffect(() => {
        async function getData() {
            const request = await axios.get(`https://api.spoonacular.com/recipes/search?query=${food}&cuisine=${country}&number=150&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&type=${type}`);
            setRecipes(request.data.results)
            
        }
        getData();
    },[food, country, type])


    return (
        <RecipeContext.Provider value={{ recipes, food, setFood, setCountry, setType }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider;
