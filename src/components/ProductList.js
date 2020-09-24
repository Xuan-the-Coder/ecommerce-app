import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


  export default function ProductList() {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products.json").then(response => {
            response.json().then(data => {
                setProducts(data);
            })
        })
    }, [])

  
    return (
    <div>
    
      <div>

          <Grid container spacing={4} style={{padding: 10, marginTop: 20}}>
            {products.map(product => (
              <Grid item xs={3} margin="normal">
                <div>
                  <Card >
                    <CardMedia style={{height:334, width: 334}}
                      image={`http://localhost:3000${product.image_url}`}
                      title="Product Image"
                      />
                    <CardContent>
                      <Typography gutterBottom variant="heardline" component="h2">
                        {product.name}
                      </Typography>
                      <Typography variant="subtitle1">${product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color="primary" href="#contained-buttons">View product</Button>
                      <IconButton color="primary" aria-label="add to shopping cart"><AddShoppingCartIcon /></IconButton>
                    </CardActions>  
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
      </div>
      
        
     </div>
    );
  }
