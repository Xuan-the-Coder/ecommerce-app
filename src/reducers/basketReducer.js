import { ADD_PRODUCT_BASKET, DECREASE_QUANTITY, GET_NUMBERS_BASKET, INCREASE_QUANTITY } from "../actions/types";




const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products:{

    }
}

export default (state=initialState, action) => {
    let productSeleted = ""
    
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            if(state.products.length===0){
                productSeleted = action.payload
            }else if (state.products[action.payload.name]){
                productSeleted = {...state.products[action.payload.name]}
                
            }else{
                productSeleted = action.payload 
            }
            
            productSeleted.numbers +=1
            productSeleted.inCart = true
            return{
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + action.payload.price,
                products: {
                    ...state.products,
                    [action.payload.name]: productSeleted
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
            state.products[action.payload].numbers += 1
            return {
                ...state,
                basketNumbers: state.basketNumbers +1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    
                }
            }
        case DECREASE_QUANTITY:
            productSeleted = {...state.products[action.payload]}
            let newCartCost = 0
            let newBasketNumbers = 0
            if(productSeleted.numbers === 0){
                productSeleted.numbers = 0
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            }else{
                productSeleted.numbers -= 1
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers - 1
            }
            
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSeleted
                }
            }
        default:
            return state;
    }
}