import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Product from '../pages/Product';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import PersistentDrawerLeft from './Drawer'
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { productQuantity } from '../actions/productQuantity';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '0 1 auto',
      },
      cover: {
        width: 151,
        margin: '4 auto'
      },
  });
  

function Cart({basketProps, productQuantity}) {
    const classes = useStyles();
    console.log(basketProps)

    let productInCart = []

    Object.keys(basketProps.products).forEach( function(item){
        console.log(item);
        productInCart.push(basketProps.products[item])
  
    })

    productInCart = productInCart.map((product) => {

        return (
            
            <Fragment>
                <div className="product">
                <Grid container spacing={2} justify="flex-start" style={{padding: 5}} justify="center" alignItems="baseline" style={{maxWidth:4000}}>
                <Grid item xs={4} margin="normal" >
                    <Card className={classes.root} >
                    <CardMedia
                        className={classes.cover}
                        image={`https://panda-ecommerce.herokuapp.com${product.image}`}
                        title="Paella dish"
                    />
                    <div className={classes.details} stlyle={{marginLeft:100}}>
                    <CardContent className={classes.content}>
                    
                    <Typography variant="h5" component="h5">
                    {product.name.length<23? product.name : product.name.substring(0, 23)+'...'}
                    </Typography>
                    <Typography >
                        $ {product.price}
                    </Typography>
                    <CardActions> 
                    <ButtonGroup>
                        <Button size="small"
                            aria-label="reduce"
                            onClick= {() => productQuantity('decrease', product.name)}
                            
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                           <span> {product.numbers}</span>
                        <Button size="small"
                            aria-label="increase"
                            onClick= {() => productQuantity('increase', product.name)}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                    </CardActions>
                    </CardContent>

                    </div>
                    
                    </Card>
                </Grid>
                </Grid>
                </div>

                
            </Fragment>
        )
    })
    return (
        <div>
        <div>
        <PersistentDrawerLeft/>
        </div>
        <div>
            <h1>Your Items</h1>
        </div>
        <div>
            { productInCart }
        </div>

            <Card style={{maxWidth:250, marginTop: 40, marginLeft: 650}}>
                <CardContent>
                    <Typography>
                        Subtotal:$ { basketProps.cartCost }
                    </Typography>
                    <Divider />
                </CardContent>
                <CardActions>
                <Link to={`/Signin`} style={{textDecoration:'none'}} className="link" ><Button  color="inherit" style={{marginLeft:80}}>Login</Button></Link>
                </CardActions>
            </Card>
 
        </div>

    )
}

const mapStateProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateProps, { productQuantity })(Cart)
