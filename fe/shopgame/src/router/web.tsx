import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/users/homePage/indexHome";
import MasterLayout from "../pages/users/theme/masterLayout";
import Profile from "../pages/users/profile/indexProfile";
import Cart from "../pages/users/theme/Cart/Cart";
import CartItem from "../pages/users/theme/Cart/Cart";
import { CartItem as CartItemType, ProductItem } from "../component/Pdata";
import { productItems } from "../component/Pdata";
import GameOffline from "../component/gameOffline/gameOff";
import GameOnline from "../component/gameOnline/gameOn";
import UserPage from "../pages/users/userPage/indexUser";
import {productOffs, productOffs1} from "../component/gameOffline/GameoffData";



interface RouteConfig {
    path: string;
    component: React.ReactNode;
}


const CreateBrowserRouter: React.FC = () => {
    const [CartItem, setCartItem] = useState<CartItemType[]>([]);

    const addToCart = (product: ProductItem) => {
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

    const decreaseQty = (product: ProductItem) => {
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

    
        const userRouters: RouteConfig[] = [
            {
                path: '/',
                component: <HomePage addToCart={addToCart} />,
            }, {
                path: '/profile',
                component: <Profile />,
            },
            {
                path: '/user',
                component: <UserPage />,
            },
            {
                path: '/cart',
                component: <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />,
            },
            {
                path: '/game_offline',
                component: <GameOffline productOffs={productOffs}  productOffs1={productOffs1} addToCart={addToCart}/>,
            },
            {
                path: '/game_online',
                component: <GameOnline productItems={productItems} addToCart={addToCart}/>,
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
    

};



export default CreateBrowserRouter;