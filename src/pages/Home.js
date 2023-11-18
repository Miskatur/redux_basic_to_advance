import React, { useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBrand, toggleStock } from '../redux/actionCreators/filterActions';
import fetchProducts from '../redux/thunk/FetchProducts';

const Home = () => {
    const dispatch = useDispatch()
    const filterState = useSelector((state) => state?.filter?.filters)
    const { brands, stock } = filterState
    const products = useSelector((state) => state?.product?.products)
    const activeClass = "bg-blue-400 text-white"
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    let content;
    if (products?.length) {
        content = <div className='grid grid-cols-3 gap-5 py-6 px-10'>

            {
                products?.map((product) =>
                    <ProductCard
                        key={product?.id}
                        product={product}
                    />)
            }
        </div>
    }
    if (products?.length && (stock || brands?.length)) {
        content = <div className='grid grid-cols-3 gap-5 py-6 px-10'>
            {
                products?.filter((product) => {
                    if (stock) {
                        return product?.status === true
                    }
                    return product
                })?.filter((product) => {
                    if (brands?.length) {
                        return brands?.includes(product?.brand)
                    }
                    return product
                }).map((product) =>
                    <ProductCard
                        key={product?.id}
                        product={product}
                    />)
            }
        </div>
    }


    return (
        <div className=''>

            <div className='flex justify-end items-center my-10 gap-x-3 px-10'>
                <button className={`py-1 px-4 border rounded-full ${stock ? activeClass : ''}`} onClick={() => { dispatch(toggleStock()) }}>In stock</button>
                <button className={`py-1 px-4 border rounded-full ${brands?.includes('amd') ? activeClass : ''}`} onClick={() => dispatch(toggleBrand('amd'))}>AMD</button>
                <button className={`py-1 px-4 border rounded-full ${brands?.includes('intel') ? activeClass : ''}`} onClick={() => dispatch(toggleBrand('intel'))}>Intel</button>
            </div>
            {/* <div className='grid grid-cols-3 gap-5 py-6 px-10'>

                {
                    products?.map((product) =>
                        <ProductCard
                            key={product?.id}
                            product={product}
                        />)
                }
            </div> */}
            <div>
                {content}
            </div>
        </div>
    );
};

export default Home;