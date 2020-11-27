import React from "react";
import PersistentDrawerLeft from "./../components/Drawer";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <PersistentDrawerLeft />
      </div>
      <div>
        <Card className={classes.root} style={{ marginLeft: 530 }}>
          <CardContent>
            <Typography variant="subtitle1" component="p">
              This app was originally a final project for my full-stack course.
              I first built it with Ruby on Rails by implementing the MVC
              pattern. Then I converted it to a back-end JSON API and built this
              REACT app to act as the front-end piece by utilizing REDUX to
              manage state, Material UI for styling, and Firebase to store user
              credentials and to handle authentication.
            </Typography>
            <br />
            <Typography variant="subtitle1" component="p">
              The back-end piece is hosted in Heroku, and all images are stored
              in an AWS S3 bucket.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
