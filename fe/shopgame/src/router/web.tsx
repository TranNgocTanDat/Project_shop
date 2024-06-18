import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider, RouteObject,LoaderFunctionArgs } from "react-router-dom";
import HomePage from "../pages/users/homePage/indexHome";
import MasterLayout from "../pages/users/theme/masterLayout";
import Profile from "../pages/users/profile/indexProfile";
import Cart from "../pages/users/theme/Cart/Cart";
import { CartItem as CartItemType, ProductItem } from "../component/Pdata";
import { productItems } from "../component/Pdata";
import GameOffline from "../component/gameOffline/gameOff";
import GameOnline from "../component/gameOnline/gameOn";
import UserPage from "../pages/users/userPage/indexUser";
import {productOffs, productOffs1} from "../component/gameOffline/GameoffData";
import {gameOnItem1, gameOnItem2} from "../component/gameOnline/gameOnData";
import GamePlay from "../component/gamePlaystation/GamePlay";
import ProductTest from "../component/ProductTest";
import ViewTest, { loadProduct } from "../component/ViewTest";



interface RouteParams {
    id: number;
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


    const userRouters: RouteObject[] = [
        {
            path: '/',
            element: <HomePage addToCart={addToCart} />,
        }, {
            path: '/profile',
            element: <Profile />,
        },
        {
            path: '/user',
            element: <UserPage />,
        },
        {
            path: '/cart',
            element: <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />,
        },
        {
            path: '/game_offline',
            element: <GameOffline productOffs={productOffs}  productOffs1={productOffs1} addToCart={addToCart} />,

        },
        {
            path: '/game_online',
            element: <GameOnline gameOnItem1={gameOnItem1} gameOnItem2 = {gameOnItem2} addToCart={addToCart} />,
        },
        {
            path: '/game_playstation',
            element: <GamePlay gamePlayItem1={gameOnItem1} gamePlayItem2={gameOnItem2} addToCart={addToCart}/>,
        },
        {
            path: '/pt',
            element: <ProductTest productItems={productItems} />,
        }, {
            path: '/v/:id',
            element: <ViewTest />,
            loader: ({ params }: LoaderFunctionArgs<RouteParams>) => loadProduct({ params: { id: Number(params.id) } }),
        }
    ];

    const router = createBrowserRouter([
        {
            path: "/",
            element: <MasterLayout CartItem={CartItem.length}><Routes>
                {userRouters.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} loader={route.loader} />
                ))}
            </Routes></MasterLayout>,
            children: userRouters
        }
    ]);

    return (
        <RouterProvider router={router} ></RouterProvider>
    )
};



export default CreateBrowserRouter;