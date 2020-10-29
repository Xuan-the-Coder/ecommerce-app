import React from 'react';
import PersistentDrawerLeft from "./../components/Drawer";
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function About() {
    const classes = useStyles();
    return(
        <div>
          <div>
            <PersistentDrawerLeft />
          </div>
          <div>
        <Card className={classes.root} style={{ marginLeft: 530 }}>
        <CardContent>
            <Typography variant="subtitle1" component="p">
            This project was originally a final project for my full-stack web dev course. I first built with website with Ruby on Rails by followig the MVC pattern. Then I rebuilt the back-end to convert it to a JSON API and coded this front-end application by utiling REACT as framework, REDUX to manage state, Matterial UI for styling and Firebase to store user info and to handle anthentication. 
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    )
}
