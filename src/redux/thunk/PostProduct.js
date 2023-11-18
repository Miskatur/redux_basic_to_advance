import { addProduct } from "../actionCreators/productActions"

const PostProduct = (productData) => {
    return async (dispatch, getState) => {
        try {
            const res = await fetch('http://localhost:5000/api/v1/products/create', {
                method: "POST",
                body: JSON.stringify(productData),
                headers: {
                    "Content-type": "application/json"
                }
            })
            const data = await res.json()


            if (data.status === 200) {
                dispatch(addProduct(data.data))
            }
            if (data.status === 500)
                alert(data.error)
        } catch (error) {
            alert(error.message)
        }
    }
}

export default PostProduct