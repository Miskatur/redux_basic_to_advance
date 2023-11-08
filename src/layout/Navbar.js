import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="p-4 bg-gray-100 text-gray-800">
            <div className="container flex justify-between h-12 mx-auto">
                <Link to={'/'} className="flex items-center p-2 text-2xl font-semibold" >
                   Tech-Talk
                </Link>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <Link  to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-cyan-600 border-cyan-600">Home</Link>
                    </li>
                    <li className="flex">
                        <Link  to="/about" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">About</Link>
                    </li>
                    <li className="flex">
                        <Link  to="/top-rated" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Top Rated</Link>
                    </li>
                    <li className="flex">
                        <Link  to="/cart" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Cart</Link>
                    </li>
                    <li className="flex">
                        <Link  to="/wishlist" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Wishlist</Link>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Sign in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-cyan-600 text-gray-50">Sign up</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;