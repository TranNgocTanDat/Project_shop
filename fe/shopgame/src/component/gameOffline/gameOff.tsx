import React, { useState } from "react"
import { Link } from "react-router-dom"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import './style.css'

import { addCart } from "../../store/Action"
import { RootState, useAppDispatch, useAppSelector } from '../../store/Store'
import { CartItem, ProductItem } from "../Pdata"







// export const Test: React.FC = () => {
//     const products = useAppSelector((state: RootState) => state.products);
//     let cart = useAppSelector((state: RootState) => state.cart);

//     const dispatch = useAppDispatch();
//     const handleAddToCart = (product: ProductItem) => {
//         const productExist = cart.find((item) => item.id === product.id);
//         let addItem;
//         if (productExist) {
//                 cart.map((item) => {
//                     if (item.id = productExist.id) {
//                         addItem = ({ ...productExist, qty: productExist.qty + 1 });
//                         return addItem;
//                     }
//                     else {
//                         return item;
//                     }
//                 }
//             );
//         } else {
//             addItem = { ...product, qty: 1 }
//             cart = [...cart, addItem]
//         }
//         dispatch(addCart(cart));
//     };

//     return (<div>

//         <div className="row">
//             {products.map(product => (
//                 <GameOffline key={product.id}
//                     productOffs={[product]}
//                     addToCart={handleAddToCart}
//                     item={{...product, qty: 0}}
//                 />
//             ))}
//         </div>
//     </div>
//     );
// }


// Định nghĩa kiểu cho các props của FlashCard
interface GameOfflineProps {
    productOffs: ProductItem[];
    addToCart: (product: CartItem) => void;
    item: CartItem;
}

const GameOffline: React.FC<GameOfflineProps> = ({ productOffs, addToCart, item}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const dispatch = useAppDispatch();

    const handleProductClick = (product: ProductItem) => {
        addToCart({...product, qty: 1})
        // dispatch(addCart(item));
    };


    const [products, setProducts] = useState(productOffs);

    return (
        <>
            <div className="top__game">
                <h1 className="top__game--title">
                    Game Offline
                </h1>
               
            </div>
            <div className="center__game">
                <div className="f-grid">

                    {products.map((product) => {
                        return (
                            <>
                                <div className='box f-grid-col'>

                                    <div className='product mtop'>
                                        <Link to={`/v/${product.id}`}>
                                            <div className='img'>
                                                <span className='discount'>{product.discount}% Off</span>
                                                <img className="cover__gameOff" src={product.cover} alt='' />
                                                <div className='product-like'>
                                                    <label>{count}</label> <br />
                                                    <i className='fa-regular fa-heart' onClick={increment}></i>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className='product-details'>
                                            <h3>{product.name}</h3>
                                            <div className='rate'>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                                <i className='fa fa-star'></i>
                                            </div>
                                            <div className='price'>
                                                <h4>${product.price}.00 </h4>
                                                <button onClick={() => handleProductClick(product)}>
                                                    <a href="/public/gameOff.json" download="/public/gameOff.json"></a>
                                                    <i className='fa fa-plus'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>


        </>
    )
}

export default GameOffline