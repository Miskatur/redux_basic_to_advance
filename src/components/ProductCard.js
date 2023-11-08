import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../redux/actionCreators/productActions';

const ProductCard = ({ product }) => {

    const { model, image, keyFeature, price, rating, quantity } = product
    const location = useLocation()

    const dispatch = useDispatch()

    return (

        <div className=' flex flex-col justify-between items-center border border-gray-700 rounded-lg bg-teal-200 relative pb-2'>
            <div className='rounded-lg'>
                {quantity &&
                    <div className='h-8 w-8  grid place-items-center rounded-full bg-indigo-500 text-white font-semibold absolute left-2 top-2'>
                        <p>
                            {quantity}
                        </p>
                    </div>}
               

                    <img src={image} alt="images" className='w-full  h-2/4 rounded-t-lg' />
            
                <div className='px-3 rounded-lg'>
                    <h1 className='text-lg font-medium'>{model}</h1>
                    <p className='text-sm py-2  '>Star : {rating} </p>
                    <p className='text-sm font-medium'>Price : {price}</p>
                </div>


                <div className='py-3 px-3'>
                    {
                        keyFeature?.map((feature, index) => (
                            <p key={index} className='text-xs'>{feature}</p>
                        ))
                    }
                </div>

            </div>
            <div className='flex justify-center items-center  w-full px-3'>
                <p className='cursor-pointer rounded-full text-sm bg-white py-2 text-center px-4  w-10/12' onClick={() => dispatch(addToCart(product))}>Add To Cart</p>
                {
                    (location.pathname === '/home' || location.pathname === '/top-rated') &&
                    <p className='cursor-pointer text-sm flex justify-center items-center  w-2/12 hover:text-red-600' onClick={() => dispatch(addToWishlist(product))}> ❤ </p>
                }
                {
                    (location.pathname === '/cart') && <p className='cursor-pointer text-sm flex justify-center items-center   w-2/12 hover:text-red-600' onClick={() => dispatch(removeFromCart(product))}> X </p>
                }
                {
                    (location.pathname === '/wishlist') && <p className='cursor-pointer text-sm flex justify-center items-center   w-2/12 hover:text-red-600' onClick={() => dispatch(removeFromWishlist(product))}> X </p>
                }

            </div>
        </div >

    )

};

export default ProductCard;