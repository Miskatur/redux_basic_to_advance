import { ADD_PRODUCT, ADD_TO_CART, ADD_TO_WISHLIST, LOAD_DATA, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, REMOVE_PRODUCT } from "../actionTypes/actionTypes"

export const loadData = (data) => {
    return {
        type: LOAD_DATA,
        payload: data
    }
}

export const addProduct = (id) => {
    return {
        type: ADD_PRODUCT,
        payload: id
    }
}
export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: id
    }
}



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