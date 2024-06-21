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
import GameOnline from "../component/gameOnline/GameOn";
import UserPage from "../pages/users/userPage/indexUser";
import {productOffs, productOffs1} from "../component/gameOffline/GameoffData";
import {gameOnItem1, gameOnItem2} from "../component/gameOnline/gameOnData";
import GamePlay from "../component/gamePlaystation/GamePlay";
import {gamePlayItem1,gamePlayItem2} from "../component/gamePlaystation/gamePlayData";
import GameSteam from "../component/gameSteam/GameSteam";
import {gameSteamItem1, gameSteamItem2} from "../component/gameSteam/gameSteamData";
import GameMoble from "../component/gameMoble/GameMobile";
import {gameMobleItem1, gameMobleItem2} from "../component/gameMoble/gameMobleData";





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
                component: <GameOnline gameOnItem1={gameOnItem1} gameOnItem2 = {gameOnItem2} addToCart={addToCart}/>,
            },
            {
                path: '/game_playstation',
                component: <GamePlay gamePlayItem1={gamePlayItem1} gamePlayItem2={gamePlayItem2} addToCart={addToCart}/>,
            },
            {
                path: '/game_steam',
                component: <GameSteam gameSteamItem1={gameSteamItem1} gameSteamItem2={gameSteamItem2} addToCart={addToCart}/>
            },
            {
                path: '/game_moblie',
                component: <GameMoble gameMobleItem1={gameMobleItem1} gameMobleItem2={gameMobleItem2} addToCart={addToCart}/>
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