import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function RecipesPagination({totalRecipes, recipesPerPage, setCurrentPage  }) {
  const classes = useStyles();
  // const pageNumbers = [];
  // for(let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
  //   pageNumbers.push(i);
  // }
  const pageNumbers =totalRecipes/recipesPerPage;
  
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  
  return (
    <div className={classes.root}>
      
      <Pagination count={pageNumbers} color="primary"  onChange={handleChange} />
      
    </div>
  );
}