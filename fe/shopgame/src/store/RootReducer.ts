import { ProductItem } from "../component/Pdata";
import { PayloadAction } from "@reduxjs/toolkit";

// Hàm loadCart để tải giỏ hàng từ localStorage
const loadCart = (): ProductItem[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
};

// Định nghĩa kiểu cho trạng thái ban đầu
interface AppState {
    products: ProductItem[];
    cart: ProductItem[];
}

// Trạng thái ban đầu
const initState: AppState = {
    products: [],
    cart: loadCart()
};

// Root reducer
export const root = (state: AppState = initState, action: PayloadAction<any>) => {
    switch (action.type) {
        case "product/load": {
            const products: ProductItem[] = action.payload;
            const cart = loadCart();
            const out: ProductItem[] = [];

            for (const p of products) {
                const cartItem = cart.find(c => c.id === p.id);
                if (cartItem) {
                    out.push({ ...p, isBuying: true });
                } else {
                    out.push({ ...p, isBuying: false });
                }
            }
            return {
                ...state,
                products: out
            };
        }
        case "cart.add": {
            const newProduct: ProductItem = action.payload;
            const newCart = [...state.cart, newProduct];
            saveCart(newCart);

            return {
                ...state,
                cart: newCart,
            };
        }
        case "cart.minus": {
            const productId: number = action.payload;
            const newCart = state.cart.filter(product => product.id !== productId);
            saveCart(newCart);

            return {
                ...state,
                cart: newCart,
            };
        }
        default:
            return state;
    }
};

// Function to save cart to localStorage
function saveCart(cart: ProductItem[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default root;