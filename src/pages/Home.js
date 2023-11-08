import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const reduxState = useSelector((state) => state)
    console.log(reduxState.cart);


    return (
        <div className='grid grid-cols-3 gap-5 p-20'>
            {
                products?.map((product) =>
                    <ProductCard
                        key={product?.id}
                        product={product}
                    />)
            }
        </div>
    );
};

export default Home;