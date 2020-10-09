export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) =>{
    return prevCartItems.find(
        cartItem => cartItem.id === nextCartItem.id
    )
}

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem
}) => {
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem })

    if(cartItemExists) {
        return prevCartItems.map(cartItem => 
            cartItem.id == nextCartItem.id
            ? {
                ...cartItem,
                ...cartItem.numbers += 1
            } : cartItem
        )
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: 1
        }

    ]
}