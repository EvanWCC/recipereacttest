import React from 'react'
import { Avatar, ListItem, ListItemIcon, ListItemText, List } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
    // root: {
    //   display: 'flex',
    //   '& > *': {
    //     margin: theme.spacing(1),
    //   },
    // },
    avatar: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
    
  }));
  
const Instructions = ({instruction}) => {
    const classes = useStyles();
    return (
        <List className="instruction">
            
            
            <ListItem>
                <ListItemIcon>
                    <Avatar className={classes.avatar}>
                        {instruction.number}
                    </Avatar>
                </ListItemIcon>
                <ListItemText primary={instruction.step} />
            </ListItem>
        </List>
    )
}

export default Instructions
