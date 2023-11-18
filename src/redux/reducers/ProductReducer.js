import { ADD_PRODUCT, ADD_TO_CART, ADD_TO_WISHLIST, LOAD_DATA, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, REMOVE_PRODUCT } from "../actionTypes/actionTypes";

const initialState = {
    products: [],
    cart: [],
    wishlist: []
};

const ProductReducer = (state = initialState, action) => {
    const selectedProduct = state.cart.find(product => product.id === action.payload.id)

    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product?._id !== action.payload)
            }

        case ADD_TO_CART:
            if (selectedProduct) {
                const newCart = state.cart.filter(item => item.id !== selectedProduct.id)
                selectedProduct.quantity = selectedProduct.quantity + 1
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }

        case REMOVE_FROM_CART:
            if (selectedProduct.quantity > 1) {
                const newCart = state.cart.filter(item => item.id !== selectedProduct.id)
                selectedProduct.quantity = selectedProduct.quantity - 1
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            }

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== selectedProduct.id)
            }

        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }

        case REMOVE_FROM_WISHLIST:
            const remainingProductInWishList = state.wishlist.filter(item => item.id !== action.payload)
            return {
                ...state,
                wishlist: remainingProductInWishList
            }


        default:
            return state

    }
}

export default ProductReducer;