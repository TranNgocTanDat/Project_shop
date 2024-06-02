export interface CartItem {
    id: number;
    name: string;
    cover: string;
    price: number;
    qty: number;
  }

  export interface Product {
    id: number;
    name: string;
    price: number;
    cover: string;
    discount: number;
    [key: string]: any; // Các thuộc tính khác nếu có
  }
  
  export interface CartItem extends Product {
    qty: number;
  }

