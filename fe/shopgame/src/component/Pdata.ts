
export interface ProductItem {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  [key: string]: any; // Các thuộc tính khác nếu có
}

export interface CartItem extends ProductItem {
  qty: number;
}

const productItems: ProductItem[] = [
  {
    id: 1,
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 2,
    discount: 40,
    cover: "./images/flash/flash-2.png",
    name: "Watch",
    price: 20,
  },
  {
    id: 3,
    discount: 40,
    cover: "./images/flash/flash-3.png",
    name: "Smart Mobile Black",
    price: 200,
  },
  {
    id: 4,
    discount: 40,
    cover: "./images/flash/flash-4.png",
    name: "Smart Watch Black",
    price: 50,
  },
  {
    id: 5,
    discount: 50,
    cover: "./images/flash/flash-1.png",
    name: "Shoes",
    price: 100,
  },
  {
    id: 6,
    discount: 50,
    cover: "./images/flash/flash-3.png",
    name: "Shoes",
    price: 100,
  },
];

const cartItems: CartItem[] = [
{
  id: 1,
  discount: 50,
  cover: "./images/flash/flash-1.png",
  name: "Shoes",
  price: 100,
  qty: 2
},
{
  id: 2,
  discount: 40,
  cover: "./images/flash/flash-2.png",
  name: "Watch",
  price: 20,
  qty: 2
},
{
  id: 3,
  discount: 40,
  cover: "./images/flash/flash-3.png",
  name: "Smart Mobile Black",
  price: 200,
  qty: 2
},
{
  id: 4,
  discount: 40,
  cover: "./images/flash/flash-4.png",
  name: "Smart Watch Black",
  price: 50,
  qty: 2
},
{
  id: 5,
  discount: 50,
  cover: "./images/flash/flash-1.png",
  name: "Shoes",
  price: 100,
  qty: 2
},
{
  id: 6,
  discount: 50,
  cover: "./images/flash/flash-3.png",
  name: "Shoes",
  price: 100,
  qty: 2
},
];

export { productItems, cartItems };

