import { ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from "../actionTypes/actionTypes"

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    }
}

export const addToWishlist = (product) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: product
    }
}

export const removeFromWishlist = (productId) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: productId
    }
}