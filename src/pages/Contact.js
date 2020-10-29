import React from 'react';
import PersistentDrawerLeft from "./../components/Drawer";
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import GitHubIcon from '@material-ui/icons/GitHub';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

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

export default function Contact() {
    const classes = useStyles();
    return(
        <div>
          <div>
            <PersistentDrawerLeft />
          </div>
          <div>
        <Card className={classes.root} style={{ marginLeft: 530 }}>
        <CardContent>
            <List>
            <ListItem button>
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
              <ListItemText primary="Xuan Wang" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
              <ListItemText primary="wx209dewang@gmail.com" />
            </ListItem>
            <ListItem button>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
              <ListItemText primary="https://github.com/Xuan-the-Coder/" />
            </ListItem>
            </List>
        </CardContent>
        </Card>
        </div>
        </div>
    )
}
