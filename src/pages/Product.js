import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Container from "@material-ui/core/Container";
import PersistentDrawerLeft from "../components/Drawer";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 600,
  },
  media: {
    height: 450,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Product = ({ match }) => {
  const id = match.params.id;

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://panda-ecommerce.herokuapp.com/products/${id}.json`).then((response) => {
      response.json().then((data) => {
        setProduct(data);
      });
    });
  }, []);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(product.name);

  return (
    <div>
      <PersistentDrawerLeft />
      <Grid container spacing={2} justify="center" alignItems="baseline">
        <Grid item xs={4} style={{ marginRight: 150 }}>
          <Container maxWidth="false" justify="center" alignItems="baseline">
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>{product.name}</Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardMedia
                className={classes.media}
                image={`http://localhost:3000${product.image_url}`}
                title="Paella dish"
              />
              <CardContent>
                <Typography color="textPrimary" component="h1">
                  <strong>{product.name}</strong>
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>{product.description}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
