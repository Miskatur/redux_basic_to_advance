import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector((state) => state.cart)

    // let content;

    // if (loading) {
    //     content = <div className='flex justify-center items-center w-full'>
    //         <p className='text-sm'> Loading on going ...</p>
    //     </div>
    // }
    // if (error) {
    //     content = <div className='flex justify-center items-center w-full'>
    //         <p className='text-sm'> Something went  ...</p>
    //     </div>
    // }
    // if (!loading && !error && cart?.length === 0) {
    //     content =
    //         <div className='flex justify-center items-center w-full'>
    //             <p className='text-sm'> No product available</p>
    //         </div>

    // }
    // if (!loading && !error && cart?.length) {
    //     content = <div className='grid grid-cols-3 gap-5 px-20'>
    //         {
    //             cart?.map((product, index) =>
    //                 <ProductCard
    //                     product={product}
    //                     key={index}
    //                 />
    //             )
    //         }

    //     </div>
    // }


    return (
        <div className='mt-10 grid grid-cols-3 gap-5 '>
            {/* {content} */}
            {
                cart?.sort((a, b) => a?.id - b?.id).map((product, index) =>
                    <ProductCard
                        product={product}
                        key={index}
                    />
                )
            }
        </div>
    );
};

export default Cart;