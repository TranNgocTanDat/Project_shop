
import React, { useState, useEffect } from "react";
import { Route, RouteObject, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CartItem as CartItemType, ProductItem, cartItems, productItems, productOns, productPlays, productSteams } from "../component/Pdata";
import ProductDetail, { loadProduct } from "../component/Product/ProductDetail";
import HomePage from "../pages/users/homePage/indexHome";
import UserPage from "../pages/users/userPage/indexUser";

import { productOffs } from "../component/Pdata";
import GameOffline from "../component/gameOffline/gameOff";
import Cart from "../pages/users/theme/Cart/Cart";
import MasterLayout from "../pages/users/theme/masterLayout";
import { RootState, useAppDispatch, useAppSelector } from "../store/Store";
import { addCart, rmCart } from "../store/Action";
import GameOnline from "../component/gameOnline/gameOn";
import GamePlay from "../component/gamePlaystation/GamePlay";
import GameStem from "../component/gameSteam/GameSteam";
import { DataUser } from "../component/user/dataUser";
import { getBalance, updateUser } from "../component/user/checkLogin";


const AppRouter: React.FC = () => {
    const cart = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

    const [CartItem, setCartItem] = useState<CartItemType[]>(cart || []);

    const addToCart = (product: ProductItem, qty: number = 1) => {
        const productExist = CartItem.find((item) => item.id === product.id);
        let newCartItems;
        if (productExist) {
            newCartItems = CartItem.map((item) =>
                item.id === productExist.id ? { ...productExist, qty: productExist.qty + qty } : item
            );
        } else {
            newCartItems = [...CartItem, { ...product, qty }];
        }
        setCartItem(newCartItems);
        dispatch(addCart(newCartItems));
    };

    const decreaseQty = (product: ProductItem) => {
        const productExist = CartItem.find((item) => item.id === product.id);
        let newCartItems;
        if (productExist) {
            if (productExist.qty === 1) {
                newCartItems = CartItem.filter((item) => item.id !== product.id);
                setCartItem(newCartItems);
                dispatch(rmCart(newCartItems));
            } else {
                newCartItems = CartItem.map((item) =>
                    item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item
                );
                setCartItem(newCartItems);
                dispatch(addCart(newCartItems));
            }
        }
    };

    // Thanh toán cập nhập số dư
    const [user, setUser] = useState<DataUser | null>(null);
    const [balance, setBalance] = useState<number | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          const balance = getBalance(user);
          setBalance(balance);
          setUser(user);
        }
      }, []);

      const handlePayment = (total: number) => {
        if (user && balance !== null && balance >= total) {
          const newBalance = balance - total;
          setBalance(newBalance);
          updateUser(user, newBalance);
          return "Thanh toán thành công";
        } else {
          return user === null ? "Vui lòng đăng nhập" : "Số dư không đủ";
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
            element: <Cart user={user} balance={balance} handlePayment={handlePayment} addToCart={addToCart} decreaseQty={decreaseQty} />,
        },
        {
            path: '/game_offline',
            element: <GameOffline productOffs={productOffs} addToCart={addToCart} />,
        }, {
            path: '/game_online',
            element: <GameOnline productOns={productOns} addToCart={addToCart} />,
        }, {
            path: '/game_play',
            element: <GamePlay productPlays={productPlays} addToCart={addToCart} />,
        }, {
            path: '/game_steam',
            element: <GameStem produceSteams={productSteams} addToCart={addToCart} />,
        },
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
                    path: 'productDetail/:id',
                    element: (<MasterLayout CartItem={CartItem.length}><ProductDetail addToCart={addToCart} /></MasterLayout>),
                    loader: loadProduct,
                },
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default AppRouter;