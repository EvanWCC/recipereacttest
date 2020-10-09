import React from 'react';
import RecipeContextProvider from './context/RecipeContext'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App({match}) {
  
  return (
    <RecipeContextProvider>
      
      <Router>
        
        <Switch>
          
          <Route exact path="/">
            
            <HomePage />
          </Route>
          
          <Route exact path="/:recipeId">
            <DetailPage />
          </Route>

        </Switch>
      </Router>
      
      
    </RecipeContextProvider>
    
  );
}

export default App;
