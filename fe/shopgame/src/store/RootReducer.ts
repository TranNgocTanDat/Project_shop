import { ProductItem } from "../component/Pdata";
import {  PayloadAction } from "@reduxjs/toolkit";

// Hàm loadCart để tải giỏ hàng từ localStorage
const loadCart = (): ProductItem[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
};

// Định nghĩa kiểu cho trạng thái ban đầu
interface AppState {
    products: ProductItem[];
    // cart: ProductItem[]; // Bỏ dấu comment nếu bạn muốn sử dụng giỏ hàng trong state
}

// Trạng thái ban đầu
const initState: AppState = {
    products: [],
    // cart: loadCart()
};

// export const root = (state: AppState = initState, action: AnyAction) => {
//     switch (action.type) {
//         case "product/load": {
//             let cart = loadCart();
//             let products:ProductItem[] = action.payload;
//             let out: (ProductItem & { isBuying: boolean })[] = [];
//             //
//             lop1: for (const p of products) {
//                 for (const c of cart) {
//                     if (p.id === c.id) {
//                         out.push({ ...p, isBuying: true });
//                         continue lop1;
//                     }
//                 }
//                 out.push({ ...p, isBuying: false });
//             }
//             return {
//                 ...state,
//                 products: out
//             }
//         }
//         default: return state;
//     }
// }
export const root = (state: AppState = initState, action: PayloadAction<ProductItem[]>) => {
    switch (action.type) {
        case "product/load": {
            // let cart = loadCart();
            let products:ProductItem[] = action.payload;
            let out: (ProductItem )[] = [];
            
            lop1: for (const p of products) {
                    if (p.id) {
                        out.push({ ...p});
                        continue lop1;
                    }
                out.push({ ...p});
            }
            return {
                ...state,
                products: out
            }
        }
        default: return state;
    }
}
