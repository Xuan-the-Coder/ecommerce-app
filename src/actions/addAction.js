import { ADD_PRODUCT_BASKET } from './types'
import Axios from "axios";

export const addBasket = (productId) => async (dispatch) => {

    const { data } = await Axios.get(`https://panda-ecommerce.herokuapp.com/products/${productId}.json`)
        console.log("Adding to basket")
        console.log(productId)
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload:{
                id: productId,
                name: data.name,
                price: parseFloat(data.price),
                numbers: 0,
                inCart: false,
                image: data.image_url
            }
        })
}