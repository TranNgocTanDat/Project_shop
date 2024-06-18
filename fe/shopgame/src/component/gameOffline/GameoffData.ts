
export interface ProductOff {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  [key: string]: any; // Các thuộc tính khác nếu có
}

export interface CartItem extends ProductOff {
  qty: number;
}

const productOffs: ProductOff[] = [
  {
    id: 1,
    discount: 0,
    cover: "./images/gameOff/gameoff-1.png",
    name: "Đào vàng",
    price: 100,
  },
  {
    id: 2,
    discount: 50,
    cover: "./images/gameOff/gameoff-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    id: 3,
    discount: 40,
    cover: "./images/gameOff/gameoff-3.png",
    name: "Subway surfers",
    price: 200,
  },
  {
    id: 4,
    discount: 40,
    cover: "./images/gameOff/gameoff-4.png",
    name: "solitaired",
    price: 50,
  },
  {
    id: 5,
    discount: 50,
    cover: "./images/gameOff/gameoff-5.png",
    name: "Plants vs zombies",
    price: 100,
  },
];
const productOffs1: ProductOff[] = [
  {
    id: 6,
    discount: 0,
    cover: "./images/gameOff/gameoff-6.png",
    name: "Candy crush saga",
    price: 100,
  },
  {
    id: 7,
    discount: 50,
    cover: "./images/gameOff/gameoff-7.png",
    name: "Tom",
    price: 20,
  },
  {
    id: 8,
    discount: 40,
    cover: "./images/gameOff/gameoff-8.png",
    name: "Angry birds",
    price: 200,
  },
  {
    id: 9,
    discount: 40,
    cover: "./images/gameOff/gameoff-9.png",
    name: "Temple Run",
    price: 50,
  },
  {
    id: 10,
    discount: 50,
    cover: "./images/gameOff/gameoff-10.png",
    name: "Brain Out",
    price: 100,
  },
  {
    id: 11,
    discount: 50,
    cover: "./images/gameOff/gameoff-11.png",
    name: "Minecraft",
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

export { productOffs, productOffs1, cartItems };

