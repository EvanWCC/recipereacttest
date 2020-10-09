import React, {useContext} from 'react'
import {Paper, Button} from '@material-ui/core';
import { RecipeContext } from '../context/RecipeContext';
const Country = () => {
    const { setCountry } = useContext(RecipeContext);
    return (
    <Paper>
        <Button onClick={(e) => setCountry("Chinese")}>Chinese</Button>
        <Button onClick={(e) => setCountry("Korean")}>Korean</Button>
        <Button onClick={(e) => setCountry("Italian")}>Italian</Button>
        <Button onClick={(e) => setCountry("French")}>French</Button>
    </Paper>
    )
}

export default Country
