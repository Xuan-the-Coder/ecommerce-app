import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Link } from "react-router-dom";
import PersistentDrawerLeft from "./../components/Drawer";
import { connect } from "react-redux";
import { addBasket } from "./../actions/addAction";

const CategoryProducts = (props) => {
  console.log(props);
  const id = props.match.params.id;

  const [products, setProducts] = useState([]);

  const path = `http://localhost:3000/categories/${id}.json`;

  console.log(path);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}.json`).then((response) => {
      response.json().then((data) => {
        setProducts(data);
      });
    });
  }, []);

  return (
    <div>
      <div>
        <PersistentDrawerLeft {...props} />
      </div>
      <div>
        <Grid container spacing={4} style={{ padding: 10 }}>
          {products.map((product, key) => (
            <Grid item xs={3} margin="normal">
              <div>
                <Card>
                  <CardMedia
                    style={{ height: 334, width: 350 }}
                    image={`http://localhost:3000${product.image_url}`}
                    title="Product Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="heardline" component="h2">
                      {product.name.length < 23
                        ? product.name
                        : product.name.substring(0, 23) + "..."}
                    </Typography>
                    <Typography variant="subtitle1">
                      ${product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      key={key}
                      to={`/product/${product.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        href="#contained-buttons"
                      >
                        View details
                      </Button>
                    </Link>
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                      onClick={() => props.addBasket(product.id)}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default connect(null, { addBasket })(CategoryProducts);
