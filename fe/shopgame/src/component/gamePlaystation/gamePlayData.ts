
export interface GamePlayItem {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  [key: string]: any; // Các thuộc tính khác nếu có
}

export interface CartItem extends GamePlayItem {
  qty: number;
}

const gamePlayItem1: GamePlayItem[] = [
  {
    id: 201,
    discount: 50,
    cover: "./images/gamePlay/gameplay-1.png",
    name: "FIFA 4",
    price: 20,
  },
  {
    id: 12,
    discount: 40,
    cover: "./images/gamePlay/gameplay-2.png",
    name: "Super Mario",
    price: 50,
  },
  {
    id: 13,
    discount: 40,
    cover: "./images/gamePlay/gameplay-3.png",
    name: "Hollow Knight",
    price: 50,
  },
  {
    id: 14,
    discount: 40,
    cover: "./images/gamePlay/gameplay-4.png",
    name: "Devil May Cry 5",
    price: 200,
  },
  {
    id: 15,
    discount: 50,
    cover: "./images/gamePlay/gameplay-5.png",
    name: "Nioh",
    price: 200,
  },
  {
    id: 16,
    discount: 50,
    cover: "./images/gamePlay/gameplay-6.png",
    name: "Cuphead",
    price: 100,
  },
];

const gamePlayItem2: GamePlayItem[] = [
  {
    id: 17,
    discount: 50,
    cover: "./images/gamePlay/gameplay-7.png",
    name: "Sonic & Sega All-Stars Racing",
    price: 20,
  },
  {
    id: 18,
    discount: 40,
    cover: "./images/gamePlay/gameplay-8.png",
    name: "Đấu Trường Thú 3",
    price: 50,
  },
  {
    id: 19,
    discount: 40,
    cover: "./images/gamePlay/gameplay-9.png",
    name: "Disney Universe",
    price: 50,
  },
  {
    id: 110,
    discount: 40,
    cover: "./images/gamePlay/gameplay-10.png",
    name: "Renegade Ops",
    price: 200,
  },
  {
    id: 111,
    discount: 50,
    cover: "./images/gamePlay/gameplay-11.png",
    name: "Deathspank Trilogy",
    price: 20,
  },
  {
    id: 112,
    discount: 50,
    cover: "./images/gamePlay/gameplay-12.png",
    name: "Naruto Shippuden Ninja Storm 3",
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

export { gamePlayItem1, gamePlayItem2, cartItems };

