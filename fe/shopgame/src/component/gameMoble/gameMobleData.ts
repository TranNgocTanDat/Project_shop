
export interface GameMobleItem {
  id: number;
  name: string;
  price: number;
  cover: string;
  discount: number;
  [key: string]: any; // Các thuộc tính khác nếu có
}

export interface CartItem extends GameMobleItem {
  qty: number;
}

const gameMobleItem1: GameMobleItem[] = [
  {
    id: 31,
    discount: 50,
    cover: "./images/gameMobile/gamemobile-1.png",
    name: "Liên Quân",
    price: 20,
  },
  {
    id: 12,
    discount: 40,
    cover: "./images/gameMobile/gamemobile-2.png",
    name: "FREE FIRE",
    price: 50,
  },
  {
    id: 13,
    discount: 40,
    cover: "./images/gameMobile/gamemobile-3.png",
    name: "Tốc Chiến",
    price: 50,
  },
  {
    id: 14,
    discount: 40,
    cover: "./images/gameMobile/gamemobile-4.png",
    name: "Mobile Legends",
    price: 200,
  },
  {
    id: 15,
    discount: 50,
    cover: "./images/gameMobile/gamemobile-5.png",
    name: "Teamfight Tactics",
    price: 200,
  },
  {
    id: 16,
    discount: 50,
    cover: "./images/gameMobile/gamemobile-6.png",
    name: "8 Ball Pool",
    price: 100,
  },
];

const gameMobleItem2: GameMobleItem[] = [
  {
    id: 17,
    discount: 50,
    cover: "./images/gameMobile/gamemobile-7.png",
    name: "Roblox",
    price: 20,
  },
  {
    id: 18,
    discount: 40,
    cover: "./images/gameMobile/gamemobile-8.png",
    name: "Piano Game",
    price: 50,
  },
  {
    id: 19,
    discount: 40,
    cover: "./images/gameMobile/gamemobile-9.png",
    name: "Hungry Shack World",
    price: 50,
  },
  {
    id: 110,
    discount: 40,
    cover: "./images/gameMobile/gamemobile-10.png",
    name: "Zing Play",
    price: 200,
  },
  {
    id: 111,
    discount: 50,
    cover: "./images/gameMobile/gamemobile-11.png",
    name: "Rise of Kingdoms",
    price: 20,
  },
  {
    id: 112,
    discount: 50,
    cover: "./images/gameMobile/gamemobile-12.png",
    name: "Hơi Thở Mặt Trời",
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

export { gameMobleItem1, gameMobleItem2, cartItems };

