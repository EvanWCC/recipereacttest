import React from 'react';
import '../css/DetailPageUi.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import Incredients from '../components/Incredients'
import Instructions from './Instructions';
import {Link} from 'react-router-dom'
import SummaryFix from './SummaryFix'

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 340,
  },
  
});

// const mySummary = document.getElementsByClassName("summary").innerHTML={summary};

const DetailPageUi = ({recipe}) => {
    
    const classes = useStyles();
    const {image, title, summary ,extendedIngredients, analyzedInstructions} = recipe

   
   
  console.log(recipe)
  return (
    
      <Container>
        <Grid container direction="row">
            <Grid item xs={12} md={6}>
                <Card  className={classes.root}>
                    <CardActionArea>
                        <Link to={recipe.sourceUrl}>
                            <CardMedia
                            className={classes.media}
                            image={image}
                            title={title}
                            />
                        </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p" className="summary">
                                
                                <SummaryFix summary={summary} />
                            </Typography>
                        </CardContent>
                        
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        red
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            
             
                <Paper  className="ingredients">
                    {extendedIngredients?.map((item) => {
                            return <Incredients key={item.id} item={item}  />
                                
                        })}
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className={classes.instructions}>

                    {analyzedInstructions?.map((item) => (
                            item.steps.map((instruction) => (
                                    <Instructions instruction={instruction} />
                            ))
                                    
                    ))}
                </Paper>
            </Grid>
        </Grid>
      </Container>
      
    
      

    
  );
}

export default DetailPageUi
