
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

const GamePlayItem1: GamePlayItem[] = [
  {
    id: 11,
    discount: 50,
    cover: "./images/gameOn/gameon-2.png",
    name: "Goose goose Duck",
    price: 20,
  },
  {
    id: 12,
    discount: 40,
    cover: "./images/gameOn/gameon-1.png",
    name: "PUBG",
    price: 50,
  },
  {
    id: 13,
    discount: 40,
    cover: "./images/gameOn/gameon-3.png",
    name: "CROSS FIRE",
    price: 50,
  },
  {
    id: 14,
    discount: 40,
    cover: "./images/gameOn/gameon-4.png",
    name: "League of Legends",
    price: 200,
  },
  {
    id: 15,
    discount: 50,
    cover: "./images/gameOn/gameon-5.png",
    name: "GTA-5",
    price: 200,
  },
  {
    id: 16,
    discount: 50,
    cover: "./images/gameOn/gameon-6.png",
    name: "Zing Speed",
    price: 100,
  },
];

const gamePlayItem2: GamePlayItem[] = [
  {
    id: 17,
    discount: 50,
    cover: "./images/gameOn/gameon-7.png",
    name: "Audision",
    price: 20,
  },
  {
    id: 18,
    discount: 40,
    cover: "./images/gameOn/gameon-8.png",
    name: "Võ Lâm",
    price: 50,
  },
  {
    id: 19,
    discount: 40,
    cover: "./images/gameOn/gameon-9.png",
    name: "MU",
    price: 50,
  },
  {
    id: 110,
    discount: 40,
    cover: "./images/gameOn/gameon-10.png",
    name: "Avata Star",
    price: 200,
  },
  {
    id: 111,
    discount: 50,
    cover: "./images/gameOn/gameon-11.png",
    name: "Chiến Cơ Huyền Thoại",
    price: 20,
  },
  {
    id: 112,
    discount: 50,
    cover: "./images/gameOn/gameon-12.png",
    name: "Quyền Vương",
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

export { GamePlayItem1, gamePlayItem2, cartItems };

