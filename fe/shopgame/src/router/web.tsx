import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/users/homePage/indexHome";
import MasterLayout from "../pages/users/theme/masterLayout";
import Profile from "../pages/users/profile/indexProfile";
import Cart from "../pages/users/theme/Cart/Cart";
import CartItem from "../pages/users/theme/Cart/Cart";
import { CartItem as CartItemType, Product } from "../pages/users/theme/Cart/types";



interface RouteConfig {
    path: string;
    component: React.ReactNode;
}

const renderUserRouter = (CartItem: CartItemType[]) => {
    const userRouters: RouteConfig[] = [
        {
            path: '/',
            component: <HomePage />,
        }, {
            path: '/profile',
            component: <Profile />,
        },
        {
            path: '/cart',
            component: <Cart CartItem={CartItem} addToCart={() => { }} decreaseQty={() => { }} />, // Thêm dòng này
        }
    ]

    return (
        <MasterLayout CartItem={CartItem.length}>
            <Routes>
                {
                    userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}

const CreateBrowserRouter: React.FC = () => {
    const [CartItem, setCartItem] = useState<CartItemType[]>([]);

    const addToCart = (product: Product) => {
        const productExit = CartItem.find((item) => item.id === product.id);
        if (productExit) {
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item
                )
            );
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }]);
        }
    };

    const decreaseQty = (product: Product) => {
        const productExit = CartItem.find((item) => item.id === product.id);
        if (productExit) {
            if (productExit.qty === 1) {
                setCartItem(CartItem.filter((item) => item.id !== product.id));
            } else {
                setCartItem(
                    CartItem.map((item) =>
                        item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item
                    )
                );
            }
        }
    };

    return renderUserRouter(CartItem);

};



export default CreateBrowserRouter;