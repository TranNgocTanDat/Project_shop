// import React, { useState } from "react";
// import { Route, RouteObject, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import { CartItem as CartItemType, ProductItem, cartItems } from "../component/Pdata";
// import ViewTest, { loadProduct } from "../component/Product/ProductDetail";
// import HomePage from "../pages/users/homePage/indexHome";
// import UserPage from "../pages/users/userPage/indexUser";

// import { productOffs } from "../component/Pdata";
// import GameOffline from "../component/gameOffline/gameOff";
// import Cart from "../pages/users/theme/Cart/Cart";
// import MasterLayout from "../pages/users/theme/masterLayout";
// import { RootState, useAppDispatch, useAppSelector } from "../store/Store";
// import { addCart } from "../store/Action";



// const AppRouter: React.FC = () => {

//     const cart = useAppSelector((state: RootState) => state.cart);
//     const dispatch = useAppDispatch();


//     const [CartItem, setCartItem] = useState<CartItemType[]>(cart || []);
//     const [AddItem, setAddItem] = useState<CartItemType>({} as CartItemType);

//     const addToCart = (product: ProductItem) => {
//         const productExist = CartItem.find((item) => item.id === product.id);
//         let addItem;
//         if (productExist) {
//             setCartItem(
//                 CartItem.map((item) => {
//                     if (item.id = productExist.id) {
//                         addItem = ({ ...productExist, qty: productExist.qty + 1 });
//                         setAddItem(addItem)
//                         return addItem;
//                     }
//                     else {
//                         return item;
//                     }
//                 }
//                 )
//             );
//         } else {
//             addItem = { ...product, qty: 1 }
//             setAddItem(addItem);
//             setCartItem([...CartItem, addItem]);
//         }
//         console.log(CartItem)
//         dispatch(addCart(CartItem));
//     };

//     const decreaseQty = (product: ProductItem) => {
//         const productExist = CartItem.find((item) => item.id === product.id);
//         if (productExist) {
//             if (productExist.qty === 1) {
//                 setCartItem(CartItem.filter((item) => item.id !== product.id));
//             } else {
//                 setCartItem(
//                     CartItem.map((item) =>
//                         item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item
//                     )
//                 );
//             }
//         }
//     };

//     const userRouters: RouteObject[] = [
//         {
//             path: '/',
//             element: <HomePage addToCart={addToCart} />,
//         },
//         {
//             path: '/user',
//             element: <UserPage />,
//         },
//         {
//             path: '/cart',
//             element: <Cart addToCart={addToCart} decreaseQty={decreaseQty} />,
//         },
//         {
//             path: '/game_offline',
//             element: <GameOffline productOffs={productOffs} addToCart={addToCart} item={AddItem} />,
//         },
//         // {
//         //     path: '/game_online',
//         //     element: <GameOnline productOns={productOns} addToCart={addToCart} item={AddItem} />,
//         // },
//         // {
//         //     path: '/game_playstation',
//         //     element: <GamePlay gamePlayItem1={gameOnItem1} gamePlayItem2={gameOnItem2} addToCart={addToCart} />,
//         // },

//     ];

//     const router = createBrowserRouter([
//         {
//             path: "/",
//             element: (
//                 <MasterLayout CartItem={CartItem.length}>
//                     <Routes>
//                         {userRouters.map((route, index) => (
//                             <Route
//                                 key={index}
//                                 path={route.path}
//                                 element={route.element}
//                             />
//                         ))}
//                     </Routes>
//                 </MasterLayout>
//             ),
//             children: userRouters,
//         },
//         {
//             path: '/',
//             element: <App />,
//             children: [
//                 {
//                     path: 'v/:id',
//                     element: (<MasterLayout CartItem={CartItem.length}><ViewTest /></MasterLayout>),
//                     loader: loadProduct,
//                 },
//             ]
//         }
//     ]);

//     return <RouterProvider router={router} />;
// };

// export default AppRouter;
import React, { useState } from "react";
import { Route, RouteObject, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CartItem as CartItemType, ProductItem, cartItems } from "../component/Pdata";
import ViewTest, { loadProduct } from "../component/Product/ProductDetail";
import HomePage from "../pages/users/homePage/indexHome";
import UserPage from "../pages/users/userPage/indexUser";

import { productOffs } from "../component/Pdata";
import GameOffline from "../component/gameOffline/gameOff";
import Cart from "../pages/users/theme/Cart/Cart";
import MasterLayout from "../pages/users/theme/masterLayout";
import { RootState, useAppDispatch, useAppSelector } from "../store/Store";
import { addCart } from "../store/Action";

const AppRouter: React.FC = () => {
    const cart = useAppSelector((state: RootState) => state.cart);
    const dispatch = useAppDispatch();

    const [CartItem, setCartItem] = useState<CartItemType[]>(cart || []);
    const [AddItem, setAddItem] = useState<CartItemType>({} as CartItemType);

    const addToCart = (product: ProductItem) => {
        const productExist = CartItem.find((item) => item.id === product.id);
        let newCartItems;
        if (productExist) {
            newCartItems = CartItem.map((item) =>
                item.id === productExist.id ? { ...productExist, qty: productExist.qty + 1 } : item
            );
        } else {
            newCartItems = [...CartItem, { ...product, qty: 1 }];
        }
        setCartItem(newCartItems);
        dispatch(addCart(newCartItems));
    };

    const decreaseQty = (product: ProductItem) => {
        // const productExist = CartItem.find((item) => item.id === product.id);
        // if (productExist) {
        //     if (productExist.qty === 1) {
        //         setCartItem(CartItem.filter((item) => item.id !== product.id));
        //     } else {
        //         setCartItem(
        //             CartItem.map((item) =>
        //                 item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item
        //             )
        //         );
        //     }
        // }
        const productExist = CartItem.find((item) => item.id === product.id);
        let newCartItems;
        if (productExist) {
            newCartItems = CartItem.map((item) =>
                item.id === productExist.id ? { ...productExist, qty: productExist.qty - 1 } : item
            );
        } else {
            newCartItems = [...CartItem, { ...product, qty: 1 }];
        }
        setCartItem(newCartItems);
        dispatch(addCart(newCartItems));
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
            element: <Cart addToCart={addToCart} decreaseQty={decreaseQty} />,
        },
        {
            path: '/game_offline',
            element: <GameOffline productOffs={productOffs} addToCart={addToCart} item={AddItem} />,
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