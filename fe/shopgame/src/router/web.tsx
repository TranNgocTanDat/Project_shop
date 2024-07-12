import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, RouteObject, Routes, Route } from "react-router-dom";
import App from "../App";
import {CartItem as CartItemType, ProductItem } from "../component/Pdata";
import ViewTest, { loadProduct } from "../component/Product/ProductDetail";
import { productItems } from "../component/Pdata";
import HomePage from "../pages/users/homePage/indexHome";
import UserPage from "../pages/users/userPage/indexUser";

import Cart from "../pages/users/theme/Cart/Cart";
import GameOffline from "../component/gameOffline/gameOff";
import GameOnline from "../component/gameOnline/gameOn";
import { productOffs } from "../component/Pdata";
import { productOns} from "../component/Pdata";
import GamePlay from "../component/gamePlaystation/GamePlay";
import MasterLayout from "../pages/users/theme/masterLayout";
import {gamePlayItem1,gamePlayItem2} from "../component/gamePlaystation/gamePlayData";
import GameSteam from "../component/gameSteam/GameSteam";
import {gameSteamItem1, gameSteamItem2} from "../component/gameSteam/gameSteamData";
import GameMoble from "../component/gameMoble/GameMobile";
import {gameMobleItem1, gameMobleItem2} from "../component/gameMoble/gameMobleData";



const AppRouter: React.FC = () => {
    
    const [CartItem, setCartItem] = useState<CartItemType[]>([]);

    const addToCart = (product: ProductItem) => {
        const productExist = CartItem.find((item) => item.id === product.id);
        if (productExist) {
            setCartItem(
                CartItem.map((item) =>
                    item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item
                )
            );
        } else {
            setCartItem([...CartItem, { ...product, qty: 1 }]);
        }
    };

    const decreaseQty = (product: ProductItem) => {
        const productExist = CartItem.find((item) => item.id === product.id);
        if (productExist) {
            if (productExist.qty === 1) {
                setCartItem(CartItem.filter((item) => item.id !== product.id));
            } else {
                setCartItem(
                    CartItem.map((item) =>
                        item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item
                    )
                );
            }
        }
    };

    const userRouters: RouteObject[] = [
        {
            path: '/',
            element: <HomePage addToCart={addToCart} />,
        },
        {
            path: '/user',
            element: <UserPage />,
        },
        {
            path: '/cart',
            element: <Cart  addToCart={addToCart} decreaseQty={decreaseQty} />,
        },
        {
            path: '/game_offline',
            element: <GameOffline productOffs={productOffs} addToCart={addToCart} />,
        },
        {
            path: '/game_online',
            element: <GameOnline productOns={productOns} addToCart={addToCart} />,
        },
        // {
        //     path: '/game_playstation',
        //     element: <GamePlay gamePlayItem1={gameOnItem1} gamePlayItem2={gameOnItem2} addToCart={addToCart} />,
        // },
    ];

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <MasterLayout CartItem={CartItem.length}>
                    <Routes>
                        {userRouters.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                </MasterLayout>
            ),
            children: userRouters,
        },
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path: 'v/:id',
                    element: (<MasterLayout CartItem={CartItem.length}><ViewTest /></MasterLayout>),
                    loader: loadProduct,
                },
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;