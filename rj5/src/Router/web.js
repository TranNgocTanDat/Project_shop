import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ProductList from "../component/ProductList";
import ProductDetail, {loadProduct} from "../component/ProductDetail";
import React from "react";
import FE from "../component/FE";
import Error from "../component/Error";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: 'list-product',
                element: <ProductList/>
            }, {
                path: 'product/:id',
                element: <ProductDetail/>,
                errorElement: <Error/>,
                loader: loadProduct,
            }
        ]
    }, {
        path: 'fe',
        element: <FE/>
    },
])
;

