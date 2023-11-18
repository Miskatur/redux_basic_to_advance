import { loadData } from "../actionCreators/productActions"

const fetchProducts = () => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/api/v1/products/all')
        const data = await res.json()
        if (data?.status === 200) {
            if (data?.products?.length) {
                dispatch(loadData(data?.products))
            }
        }
    }
}
export default fetchProducts;