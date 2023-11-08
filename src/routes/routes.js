import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import TopRated from "../pages/TopRated";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Wishlist from "../pages/Wishlist";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'top-rated',
                element: <TopRated />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'wishlist',
                element: <Wishlist />
            },

        ]
    }
])
