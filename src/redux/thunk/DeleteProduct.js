import { removeProduct } from "../actionCreators/productActions"

const deleteProduct = (_id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/api/v1/products/remove/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data);
        if (data?.status === 200) {
            alert('success')
            dispatch(removeProduct(data?.data?._id))
        }
    }
}

export default deleteProduct